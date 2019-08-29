import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import ParalaxSlider from "./components/ParalaxSlider";

const useStyle = makeStyles({
  entry: {
    textAlign: "justify",
    WebkitHyphens: "auto",
    MozHyphens: "auto",
    hyphen: "auto"
  }
});

const App: React.FC = () => {
  const classes = useStyle();
  return (
    <>
      <ParalaxSlider>
        <div className={classes.entry}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
          rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
          blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
          et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
          faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
          tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
          sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
          cursus nunc,
        </div>
        <div className={classes.entry}>
          Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
          wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
          Umständen, in denen Mühen und Schmerz ihm große Freude bereiten
          können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht
          sich je anstrengender körperlicher Betätigung, außer um Vorteile
          daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu
          tadeln, der die Entscheidung trifft, eine Freude zu genießen, die
          keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet,
          welcher keine daraus resultierende Freude nach sich zieht? Auch gibt
          es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur,
          weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in
          denen Mühen und Schmerz ihm große Freude bereiten können. Um ein
          triviales Beispiel zu nehmen, wer von uns unterzieht sich je
          anstrengender körperlicher Betätigung, außer um Vorteile daraus zu
          ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der
          die Entscheidung trifft, eine Freude zu genießen, die keine
          unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher
          keine daraus resultierende Freude nach sich zieht?Auch gibt es
          niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur,
        </div>
        <div className={classes.entry}>
          Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
          Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in
          Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.
          Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt
          sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in
          dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von
          der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein
          geradezu unorthographisches Leben. Eines Tages aber beschloß eine
          kleine Zeile Blindtext, ihr Name war Lorem Ipsum, hinaus zu gehen in
          die weite Grammatik. Der große Oxmox riet ihr davon ab, da es dort
          wimmele von bösen Kommata, wilden Fragezeichen und hinterhältigen
          Semikoli, doch das Blindtextchen ließ sich nicht beirren. Es packte
          seine sieben Versalien, schob sich sein Initial in den Gürtel und
          machte sich auf den Weg. Als es die ersten Hügel des Kursivgebirges
          erklommen hatte, warf es einen letzten Blick zurück auf die Skyline
          seiner Heimatstadt Buchstabhausen, die Headline von Alphabetdorf und
          die Subline seiner eigenen Straße, der Zeilengasse. Wehmütig lief ihm
          eine rhetorische Frage über die Wange, dann setzte es seinen Weg fort.
          Unterwegs traf es eine Copy. Die Copy warnte das Blindtextchen, da, wo
          sie herkäme wäre sie
        </div>
      </ParalaxSlider>
    </>
  );
};

export default App;
