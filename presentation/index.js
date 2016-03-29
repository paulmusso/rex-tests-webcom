// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

require("../assets/styles.css");

const theme = createTheme({
  primary: "#FFF",
  secondary: "#FF6600",
  tertiary: "#000",
  quartenary: "#FF6600"

}, {
  primary: "HelvNeue35",
  secondary: "HelvNeue35",
  heading: "HelvNeue45"
});

const images = {
  girl: require("../assets/bgtitle.jpg"),
  tools: require("../assets/cles.jpg")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade", "zoom"]} transitionDuration={500} progress="pacman">
          <Slide bgImage={images.girl} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="primary">Tests</Heading>
            <Heading size={2} caps fit textColor="secondary">automatisés</Heading>
            <Heading size={2} caps fit textColor="primary">sur Webcom</Heading>
          </Slide>

          <Slide bgColor="#FFD800">
            <Heading size={2} caps fit textColor="primary">Tests sur un SDK</Heading>
            <Heading size={2} caps fit textFont="heading">non graphiques</Heading>
            <List textColor="tertiary">
              <ListItem>Tests fonctionnels et tests unitaires (+150)</ListItem>
              <ListItem>Outils utilisés: <Link href="http://karma-runner.github.io/0.13/index.html">Karma</Link>, <Link href="https://github.com/jasmine/jasmine">Jasmine</Link>, <Link href="http://docs.seleniumhq.org/">Selenium</Link>, <Link href="https://github.com/gotwarlost/istanbul">Istanbul</Link> (<Link href="https://github.com/douglasduteil/isparta">isParta</Link>) et <Link href="https://github.com/gulpjs/gulp">Gulp</Link></ListItem>
              <ListItem>Exécutés en dev ou en CI</ListItem>
              <ListItem>Scénarios conversationnels entre 2 clients avec des iframes</ListItem>
              <ListItem>Code coverage</ListItem>
            </List>
          </Slide>
          <CodeSlide
              lang="jsx"
              transition={[]}
              code={require("raw!../assets/sdk.example")}
              ranges={[
              { loc: [0, 22], title: "Test async avec Jasmine" },
              { loc: [0, 1], note: "Déclaration du test, avec la cb 'done()' à appeler quand le test est fini (test asynchrone)"},
              { loc: [4, 5], note: "Création d'un spy avec 2 fonctions" },
              { loc: [8, 15], note: "Appel des fonctions du spy" },
              { loc: [17, 19], note: "Test si la fonction 'onOk()' a bien été appelée et pas 'onCancel()'" },
              { loc: [19, 20], note: "Appel de la callback 'done()' pour terminer le test" }
          ]} />
          <Slide bgColor="#E0E0E0">
            <Heading size={2} caps fit textColor="tertiary">Tests sur un portail Web</Heading>
            <Heading size={2} caps fit textFont="heading">graphiques</Heading>
            <Layout>
              <Fill>
                <div style={{backgroundColor:'#59C1EB', padding: '1em' }}>
                  <Text textColor="primary">Tests simples</Text>
                  <List textColor='tertiary'>
                    <ListItem textSize='0.8em'>Peu ou pas dynamique, factorisation simple</ListItem>
                    <ListItem textSize='0.8em'>Outil : <Link href="http://seleniumbuilder.github.io/se-builder/">Selenium Builder</Link>, IDE utilisant Firefox</ListItem>
                    <ListItem textSize='0.8em'>Fichiers JSON</ListItem>
                    <ListItem textSize='0.8em'>Facile à maintenir</ListItem>
                    <ListItem textSize='0.8em'>Utilisé par tous les tests du portail</ListItem>
                  </List>
                </div>
              </Fill>
              <Fill>
                <div style={{backgroundColor:'#B79CE0', padding: '1em'}}>
                  <Text textColor="primary">Tests complexes</Text>
                  <List textColor="tertiary">
                    <ListItem textSize="0.8em">Tests dynamiques, avec factorisation complexe</ListItem>
                    <ListItem textSize="0.8em">Outils: <Link href="http://www.webdriver.io/">WebDriver I/O</Link> et Jasmine</ListItem>
                    <ListItem textSize="0.8em">Code Javascript</ListItem>
                    <ListItem textSize="0.8em">Nécessite un développeur Javascript</ListItem>
                    <ListItem textSize="0.8em">Mis en place, mais pas utilisé</ListItem>
                  </List>
                </div>
              </Fill>
            </Layout>
          </Slide>
          <CodeSlide
              lang="jsx"
              transition={[]}
              code={require("raw!../assets/webdriverio.example")}
              ranges={[
              { loc: [0, 45], title: "Test avec Webdriver I/O" },
              { loc: [0, 2], note: "Import de fichiers propres aux projets"},
              { loc: [3, 4], note: "Déclaration de la suite de tests"},
              { loc: [4, 7], note: "Fonction appelée au début de la suite" },
              { loc: [7, 10], note: "Fonction appelée à la fin de la suite" },
              { loc: [10, 13], note: "Fonction appelée avant chaque test" },
              { loc: [11, 12], note: "Lance un nouvel onglet et attend bien qu'il soit là" },
              { loc: [13, 16], note: "Fonction appelée après chaque test" },
              { loc: [14, 15], note: "Ferme l'onglet et attend la confirmation" },
              { loc: [16, 17], note: "Déclaration d'un test, attention ne pas oublier l'* après function" },
              { loc: [17, 18], note: "Appel d'un scénario défini au préalable, authentification pour l'exemple" },
              { loc: [17, 18], note: "Le mot clé 'yield' évite l'usage de callbacks. La ligne suivante n'est exécutée qu'après que la promise renvoyée par browser.signIn() soit résolue" },
              { loc: [19, 23], note: "Attente qu'un élément existe, définit une valeur dans un champ et click sur un bouton"},
              { loc: [23, 31], note: "Attente qu'un élément existe, clicl sur un bouton et atttente qu'un élément disparaisse"}

          ]} />
          <Slide bgImage={images.tools} bgDarken={0.75}>
            <Heading size={2} textColor='secondary' caps fit>Autres tests</Heading>
            <List textColor='primary'>
              <ListItem>Quelques tests unitaires sur un portail web avec <Link href="https://github.com/reactjs/redux">Redux</Link>, <Link href="https://github.com/yelouafi/redux-saga">Redux-Saga</Link>, <Link href="http://karma-runner.github.io/0.13/index.html">Karma</Link> / <Link href="https://github.com/jasmine/jasmine">Jasmine</Link> et <Link href="http://phantomjs.org/">PhantomJS</Link></ListItem>
              <ListItem>Quelques <Link href="https://github.com/webcom-components/visio-sample">tests</Link> avec <Link href="https://github.com/mochajs/mocha">Mocha</Link> sur <Link href="https://travis-ci.org">Travis</Link></ListItem>
              <ListItem><Link href="https://github.com/webcom-components/reach">Expérimentation</Link> sur <Link href="http://karma-runner.github.io/0.13/index.html">Karma</Link> / <Link href="https://github.com/jasmine/jasmine">Jasmine</Link> avec <Link href="https://saucelabs.com/">SauceLabs</Link></ListItem>
            </List>
          </Slide>
          <CodeSlide
              lang="jsx"
              transition={[]}
              code={require("raw!../assets/redux.example")}
              ranges={[
              { loc: [0, 27], title: "Tests sur la logique métier" },
              { loc: [1, 13], note: "Initialisation de l'état" },
              { loc: [16, 19], note: "Test que le user a bien été rajouté" },
              { loc: [20, 23], note: "Test que le user a bien été supprimé" }
            ]} />
          <CodeSlide
              lang="jsx"
              transition={[]}
              code={require("raw!../assets/react.example")}
              ranges={[
              { loc: [0, 28], title: "Tests sur les composants" },
              { loc: [0, 8], note: "Instanciation des composants (1/2)" },
              { loc: [8, 15], note: "Instanciation des composants (2/2)" },
              { loc: [16, 20], note: "Test si 1er composant contient bien 2 Gauges" },
              { loc: [21, 24], note: "Contient un élément avec la classe 'manage' ?" },
              { loc: [25, 28], note: "Contient un élément avec la classe 'remove' ?" }
            ]} />
        </Deck>
      </Spectacle>
    );
  }
}
