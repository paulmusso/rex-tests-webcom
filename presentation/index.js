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
          <Slide bgColor="#59C1EB">
            <CodePane
              lang="javascript"
              source={require("raw!../assets/sdk.example")}
            />
          </Slide>
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
          
          <Slide bgColor="#B79CE0">
            <CodePane
              lang="javascript"
              source={require("raw!../assets/webdriverio.example")}
            />
          </Slide>

          <Slide bgImage={images.tools} bgDarken={0.75}>
            <Heading size={2} textColor='secondary' caps fit>Autres tests</Heading>
            <List textColor='primary'>
              <ListItem>Quelques tests unitaires sur un portail web avec <Link href="https://github.com/reactjs/redux">Redux</Link>, <Link href="https://github.com/yelouafi/redux-saga">Redux-Saga</Link>, <Link href="http://karma-runner.github.io/0.13/index.html">Karma</Link> / <Link href="https://github.com/jasmine/jasmine">Jasmine</Link> et <Link href="http://phantomjs.org/">PhantomJS</Link></ListItem>
              <ListItem>Quelques <Link href="https://github.com/webcom-components/visio-sample">tests</Link> avec <Link href="https://github.com/mochajs/mocha">Mocha</Link> sur <Link href="https://travis-ci.org">Travis</Link></ListItem>
              <ListItem><Link href="https://github.com/webcom-components/reach">Expérimentation</Link> sur <Link href="http://karma-runner.github.io/0.13/index.html">Karma</Link> / <Link href="https://github.com/jasmine/jasmine">Jasmine</Link> avec <Link href="https://saucelabs.com/">SauceLabs</Link></ListItem>
            </List>
          </Slide>
          <Slide bgColor="#59C1EB">
            <Text textSize="2em" textColor='primary'>Tests unitaires sur logique métier</Text>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/redux.example")}
            />
          </Slide>
          <Slide bgColor="#B79CE0">
            <Text textSize="2em" textColor='primary'>Tests unitaires sur les composants</Text>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/react.example")}
            />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
