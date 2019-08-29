import React from "react";
import cx from "classnames";

import { makeStyles, Theme } from "@material-ui/core/styles";

interface Position {
  x: number;
  y: number;
}

interface StyleProps {
  count: number;
  index: number;
  position: Position;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => {
  return {
    root: {
      height: "100%",
      width: "100%",
      "& *": {
        cursor: ""
      },
      backgroundColor: "rgba(0,0,0,0.7)"
    },
    dragging: props => ({
      transform: `translateX(${props.position.x}px)`
    }),
    notDragging: {
      transition: "all 500ms ease-in-out"
    },
    slider: props => ({
      position: "relative",
      left: `-${props.index * 100}%`,
      height: "100%",
      width: `${props.count * 100}%`
    }),
    slide: props => {
      return {
        display: "inline-block",
        position: "relative",
        width: `${100 / props.count}%`,
        height: "100%"
      };
    },
    wrap: {
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      maxWidth: "500px",
      maxHeight: "300px",
      overflowY: "auto",
      backgroundColor: "rgba(0,0,0,0.7)",
      [theme.breakpoints.down(600)]: {
        maxWidth: "83.333333333333333%"
      }
    },
    next: {
      position: "absolute",
      top: "0px",
      right: "0px",
      height: "100%",
      width: "50px",
      maxWidth: "10%",
      transition: `all ${200}ms ease-in-out`,
      "&:hover": {
        boxShadow: "inset -20px 0px 10px -10px rgba(255,255,255,0.7)"
      },
      [theme.breakpoints.down(600)]: {
        maxWidth: "16.66666666666666%"
      }
    },
    nextByDrag: {
      boxShadow: "inset -20px 0px 10px -10px rgba(255,255,255,0.7)"
    },
    prev: {
      position: "absolute",
      top: "0px",
      height: "100%",
      width: "50px",
      maxWidth: "10%",
      transition: `all ${200}ms ease-in-out`,
      "&:hover": {
        boxShadow: "inset 20px 0px 10px -10px rgba(255,255,255,0.7)"
      },
      [theme.breakpoints.down(600)]: {
        maxWidth: "16.66666666666666%"
      }
    },
    prevByDrag: {
      boxShadow: "inset 20px 0px 10px -10px rgba(255,255,255,0.7)"
    }
  };
});

const CLICK_TIMEOUT_MS = 200;

export const ParalaxSlider: React.FC = props => {
  const count = React.Children.count(props.children);

  const [index, setIndex] = React.useState(0);

  const [clickTimeout, setClickTimeout] = React.useState();
  const [dragging, setDragging] = React.useState(false);
  const [startPosition, setStartPosition] = React.useState<Position>();
  const [actualPosition, setActualPosition] = React.useState<Position>();
  const [lastPosition, setLastPostion] = React.useState<Position>();

  const goToPrev = () => {
    let prevIndex = index - 1;
    if (prevIndex < 0) {
      prevIndex = count - 1;
    }
    setIndex(prevIndex);
  };

  const goToNext = () => setIndex((index + 1) % count);

  const offset: Position | undefined =
    dragging && startPosition && actualPosition
      ? {
          x: actualPosition.x - startPosition.x,
          y: 0
        }
      : { x: 0, y: 0 };

  if (lastPosition && !dragging) {
    if (lastPosition.x < 0 && lastPosition.x < -100) {
      goToNext();
      setLastPostion({ x: 0, y: 0 });
    } else if (lastPosition.x > 0 && lastPosition.x > 100) {
      goToPrev();
      setLastPostion({ x: 0, y: 0 });
    }
  }

  const selectPrevByDrag = offset.x > 0 && offset.x > 100;
  const selectNextByDrag = offset.x < 0 && offset.x < -100;

  const classes = useStyles({ count, index, position: offset });
  return (
    <div className={classes.root}>
      <div
        className={cx(classes.slider, {
          [classes.dragging]: dragging,
          [classes.notDragging]: !dragging
        })}
      >
        {React.Children.map(props.children, (child, i) => (
          <div
            className={classes.slide}
            onMouseDown={e => {
              e.persist();
              e.preventDefault();
              setClickTimeout(
                setTimeout(() => {
                  setDragging(true);
                  setStartPosition({ x: e.clientX, y: e.clientY });
                  setActualPosition({ x: e.clientX, y: e.clientY });
                }, CLICK_TIMEOUT_MS)
              );
              return false;
            }}
            onMouseUp={e => {
              if (clickTimeout) clearTimeout(clickTimeout);
              setDragging(false);
            }}
            onMouseMove={e => {
              if (dragging) {
                setActualPosition({ x: e.clientX, y: e.clientY });
                setLastPostion(offset);
              }
            }}
            onMouseOut={function(e) {}}
          >
            <div className={classes.wrap}>{child}</div>
          </div>
        ))}
      </div>
      <div
        className={cx(classes.prev, {
          [classes.prevByDrag]: selectPrevByDrag
        })}
        onClick={goToPrev}
      />
      <div
        className={cx(classes.next, {
          [classes.nextByDrag]: selectNextByDrag
        })}
        onClick={goToNext}
      />
    </div>
  );
};

export default ParalaxSlider;
