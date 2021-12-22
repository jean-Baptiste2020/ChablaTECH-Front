<template>
  <div>
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="Developpeur Web">
        <a-button type="primary" @click="dev" v-if="buttonDev">
          Commencer le Test
        </a-button>

        <div v-if="devA">
          <div>
            <a-badge>
              <a-icon slot="count" type="clock-circle" style="color: #f5222d" />
              <a-button type="dashed" :style="couleur">
                <strong> {{ minutes }} : </strong>
                <strong v-text="secondsShown"></strong>
              </a-button>
            </a-badge>
          </div>
          <br />
          <Upload
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
          >
            <div style="padding: 20px 0">
              <Icon
                type="ios-cloud-upload"
                size="52"
                style="color: #3399ff"
              ></Icon>
              <p>Cliquez ou faites glisser les fichiers ici pour télécharger</p>
            </div>
          </Upload>
        </div>

        <div v-if="devA">
          <h2><u>Pratique:</u></h2>
          <p>
            Cet exercice consiste à réaliser simplement cet boutton ci dessous
            respectant les caractéristiques suivantes: <br />
            <br />
            <strong> <u>-Nom:</u></strong> "Votre prénom" Boutton; <br />
            <strong> <u>-padding:</u></strong> 20px 40px; <br />
            <strong> <u>-Le boutton</u></strong> doit être centré etc... <br />
            A vous de déviner le reste des caractéristiques. <br />
            Bonne chance♣
          </p>
          <img src="/images/exo.png" alt="" width="100%" height="50%" />
        </div>
        <section v-if="devA">
          <div class="code">
            <label class="labelE"
              ><i class="fab fa-html5"></i>
              <p>HTML ChablaTECH</p></label
            >
            <textarea
              oninput="rafraichir()"
              placeholder="Ecrivez du Code HTML..."
              id="code-HTML"
              cols="30"
              rows="10"
            ></textarea>
            <label class="labelE"
              ><i class="fab fa-css3-alt"></i>
              <p>CSS ChablaTECH</p></label
            >
            <textarea
              oninput="rafraichir()"
              placeholder="Ecrivez du Code CSS..."
              id="code-CSS"
              cols="30"
              rows="10"
            ></textarea>
            <label class="labelE"
              ><i class="fab fa-js"></i>
              <p>JS ChablaTECH</p></label
            >
            <textarea
              oninput="rafraichir()"
              placeholder="Ecrivez du Code JS..."
              id="code-JS"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <iframe id="res"></iframe>
        </section>

        <div id="test" v-if="devA">
          <br /><br />
          <h2><u>QCM:</u></h2>
          <br />
          <h5>
            Quel symbole sépare le nom de la page de ses paramètres dans l'URL ?
          </h5>

          <a-checkbox @change="onChange"
            >Un point :
            <a-button type="primary" shape="circle"> . </a-button></a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            Un point d'interrogation :
            <a-button type="primary" shape="circle"> ? </a-button>
          </a-checkbox>
          <br />
          <a-checkbox @change="onChange">
            Un point d'exclamation :
            <a-button type="primary" shape="circle"> ! </a-button></a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            Une esperluette :
            <a-button type="primary" shape="circle"> & </a-button>
          </a-checkbox>

          <br />
          <br />

          <h5>Quelle méthode d'envoi de données est la moins limitée ?</h5>
          <a-checkbox @change="onChange">
            <a-button type="primary" shape="circle">POST </a-button></a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            <a-button type="primary" shape="circle"> GET </a-button>
          </a-checkbox>
          <br />
          <br />

          <h5>
            Il est possible de faire passer des nombres négatifs dans l'URL.
          </h5>
          <a-checkbox @change="onChange">
            <a-button type="primary" shape="circle">
              VRAI
            </a-button></a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            <a-button type="primary" shape="circle"> FAUX </a-button>
          </a-checkbox>
          <br />
          <br />

          <h5>Laquelle de ces méthodes d'envoi est plus sûre que l'autre ?</h5>
          <a-checkbox @change="onChange">
            <a-button type="primary" shape="circle">
              POST
            </a-button></a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            <a-button type="primary" shape="circle"> GET </a-button>
          </a-checkbox>
          <br />
          <a-checkbox @change="onChange"> Aucune des deux. </a-checkbox>

          <br />
          <br />
          <h5>
            Quelle fonction permet de vérifier qu'une variable existe dans la
            page ?
          </h5>
          <a-checkbox @change="onChange">
            <a-button type="primary" shape="circle">
              is_exists
            </a-button></a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            <a-button type="primary" shape="circle"> isset() </a-button>
          </a-checkbox>
          <br />
          <a-checkbox @change="onChange">
            <a-button type="primary" shape="circle">
              is_available
            </a-button></a-checkbox
          >

          <br />
          <br />
          <h5>
            Que se passe-t-il quand on ne coche pas une case à cocher dans un
            formulaire ?
          </h5>
          <a-checkbox @change="onChange"
            >La variable est envoyée et contient la valeur
            <a-button type="primary" shape="circle"> off </a-button></a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            La variable est envoyée et contient la valeur
            <a-button type="primary" shape="circle"> on </a-button>
          </a-checkbox>
          <br />
          <a-checkbox @change="onChange">
            La variable est envoyée et contient la valeur
            <a-button type="primary" shape="circle">
              disable
            </a-button></a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            La variable n'est pas envoyée.
          </a-checkbox>

          <br />
          <br />

          <h5>
            Que faut-il veiller à faire avant d'appeler la fonction
            <a-button type="primary" shape="circle"> session_start() </a-button>
            ?
          </h5>
          <a-checkbox @change="onChange"
            >Il faut qu'il n'y ait aucun caractère HTML avant l'appel de la
            fonction.
          </a-checkbox>
          <br />
          <a-checkbox @change="onChange">
            Il faut appeler la fonction
            <a-button type="primary" shape="circle"> session_init() </a-button>
          </a-checkbox>
          <br />
          <a-checkbox @change="onChange">
            Il faut définir ses variables de session au préalable.</a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            Il faut définir le numéro de session de l'utilisateur.
          </a-checkbox>
          <br />
          <br />

          <h5>
            Combien de temps une variable de session est-elle mémorisée par le
            serveur ?
          </h5>
          <a-checkbox @change="onChange">1 heure.</a-checkbox>
          <br />
          <a-checkbox @change="onChange"> 1 journée. </a-checkbox>
          <br />
          <a-checkbox @change="onChange"> 1 an.</a-checkbox>
          <br />
          <a-checkbox @change="onChange">
            Pendant la durée de la visite du visiteur.
          </a-checkbox>
          <br />
          <br />

          <h5>
            Que représente le nombre de secondes associé à notre cookie que l'on
            indique dans l'appel à la fonction setcookie ?
          </h5>
          <a-checkbox @change="onChange"
            >Le moment (timestamp) où le cookie est créé.</a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            Le moment (timestamp) où le cookie doit être détruit.
          </a-checkbox>
          <br />
          <a-checkbox @change="onChange">
            Le nombre de secondes que le cookie doit vivre avant d'être
            détruit.</a-checkbox
          >
          <br />
        </div>

        <a-button
          type="primary"
          style="width: 100%"
          @click="makePDF"
          v-if="devA"
        >
          J'ai terminé
        </a-button>
        <div v-if="over">
          <img src="images/over.png" alt="" width="100%" />
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Graphiste" force-render>
        <a-button type="primary" @click="graphiste" v-if="buttonGraphiste">
          Commencer le Test
        </a-button>

        <div v-if="graphisteA">
          <div>
            <a-badge>
              <a-icon slot="count" type="clock-circle" style="color: #f5222d" />
              <a-button type="dashed" :style="couleur">
                <strong> {{ minutes }} : </strong>
                <strong v-text="secondsShown"></strong>
              </a-button>
            </a-badge>
          </div>
          <br />
          <Upload
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
          >
            <div style="padding: 20px 0">
              <Icon
                type="ios-cloud-upload"
                size="52"
                style="color: #3399ff"
              ></Icon>
              <p>Cliquez ou faites glisser les fichiers ici pour télécharger</p>
            </div>
          </Upload>
        </div>
        <div v-if="graphisteA">
          <h2><u>Pratique:</u></h2>
          <p>
            Cet exercice consiste à réaliser simplement un logo portant le nom
            "ChablaTECH" avec les couleurs de votre choix pouvant concurencé
            voir être meilleur que le logo actuelle ChablaTECH ci-dessous.<br />
            <br />
            Bonne chance♣
          </p>
          <img src="/images/exo.png" alt="" width="100%" height="50%" />
        </div>
        <div v-if="over1">
          <img src="images/over.png" alt="" width="100%" />
        </div>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Marqueting">
        <a-button type="primary" @click="marqueting" v-if="buttonMarqueting">
          Commencer le Test
        </a-button>

        <div v-if="marquetingA">
          <div>
            <a-badge>
              <a-icon slot="count" type="clock-circle" style="color: #f5222d" />
              <a-button type="dashed" :style="couleur">
                <strong> {{ minutes }} : </strong>
                <strong v-text="secondsShown"></strong>
              </a-button>
            </a-badge>
          </div>
          <br />
          <Upload
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
          >
            <div style="padding: 20px 0">
              <Icon
                type="ios-cloud-upload"
                size="52"
                style="color: #3399ff"
              ></Icon>
              <p>Cliquez ou faites glisser les fichiers ici pour télécharger</p>
            </div>
          </Upload>
        </div>

        <div id="testM" v-if="marquetingA">
          <br /><br />
          <h2><u>QCM:</u></h2>
          <br />
          <h5>
            Parmi les propositions suivantes, lesquelles sont des exemples de
            contenu ?
          </h5>
          <em>Attention, plusieurs réponses sont possibles.</em><br />

          <a-checkbox @change="onChange">Une vidéo explicative</a-checkbox>
          <br />
          <a-checkbox @change="onChange"> Un article de blog </a-checkbox>
          <br />
          <a-checkbox @change="onChange"> Un teaser </a-checkbox>
          <br />
          <a-checkbox @change="onChange"> Un ordinateur portable </a-checkbox
          ><br />
          <a-checkbox @change="onChange"> Un tweet </a-checkbox><br />
          <a-checkbox @change="onChange"> Une donnée brute </a-checkbox>

          <br />
          <br />

          <h5>
            Quel est l'objectif premier de la création de contenu marketing ?
          </h5>
          <a-checkbox @change="onChange">
            Promouvoir votre offre à travers votre contenu marketing pour
            toucher votre cible.
          </a-checkbox>
          <br />
          <a-checkbox @change="onChange">
            Choisir un sujet qui vous plaît et acquérir de nouveaux clients
            grâce à celui-ci. </a-checkbox
          ><br />
          <a-checkbox @change="onChange">
            Créer rapidement du contenu qui va être consommé par n'importe qui
            et n'importe où pour créer le buzz.
          </a-checkbox>
          <br />
          <br />

          <h5>
            Quelles sections est-il judicieux d'inclure dans une charte
            éditoriale ?
          </h5>
          <em>Attention, plusieurs réponses sont possibles.</em><br />
          <a-checkbox @change="onChange">
            Une biographie de tous les contributeurs</a-checkbox
          >
          <br />
          <a-checkbox @change="onChange"> Les thématiques à aborder </a-checkbox
          ><br />
          <a-checkbox @change="onChange"> La charte iconographique </a-checkbox
          ><br />
          <a-checkbox @change="onChange">
            Les canaux de communication </a-checkbox
          ><br />
          <a-checkbox @change="onChange"> Les éléments de langage </a-checkbox>
          <br />
          <br />

          <h5>
            Quel message commercial est le mieux amené parmi les propositions
            suivantes ?
          </h5>
          <a-checkbox @change="onChange">
            Du 10 au 25 août, profitez de nos offres exceptionnelles sur nos
            barbecues W et gagnez les ustensiles qui vont avec.</a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            Découvrez sans plus attendre nos conseils sur la gamme barbecue W et
            profitez d'autres avantages.
          </a-checkbox>
          <br />
          <a-checkbox @change="onChange"
            >Découvrez notre gamme barbecue et profitez des beaux jours en
            famille.</a-checkbox
          >

          <br />
          <br />
          <h5>
            Vous êtes en charge de la rédaction des contenus d’une PME vendant
            des vêtements techniques sportifs. Quels territoires d’expression
            pouvez-vous définir dans votre ligne éditoriale ?
          </h5>
          <em>Attention, plusieurs réponses sont possibles.</em><br />
          <a-checkbox @change="onChange">
            Les bonnes pratiques pour s’habiller en haute montagne</a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            Les spécificités et avantages de la fibre X brevetée sur nos
            polaires
          </a-checkbox>
          <br />
          <a-checkbox @change="onChange">
            Les 5 courses de trail à faire cet été</a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            Marc, guide de haute montagne, partage ses plus belles randonnées
            dans le Massif du Verdon</a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            Les solaires à emporter avec soi cet hiver</a-checkbox
          ><br />
          <a-checkbox @change="onChange">
            Quels vêtements emporter dans sa valise pour un trek en Patagonie
            ?</a-checkbox
          >

          <br />
          <br />
          <h5>À quoi correspondent les piliers éditoriaux ?</h5>
          <a-checkbox @change="onChange"
            >Aux thématiques de la ligne éditoriale</a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            Au rubriquage des thématiques de la ligne éditoriale
          </a-checkbox>
          <br />
          <a-checkbox @change="onChange">
            Aux objectifs de la ligne éditoriale</a-checkbox
          >

          <br />
          <br />

          <h5>
            Admettons que vous soyez responsable de la stratégie éditoriale
            d'une marque de location de berlines de luxe. Quel ton serait-il le
            plus prudent d'adopter pour s'adresser au marché français ?
          </h5>
          <img src="/images/car.png" style="width: 100%; heigth: 50%" alt="" />
          <em>Attention, plusieurs réponses sont possibles.</em><br />
          <a-checkbox @change="onChange"
            >Découvrez le plus grand choix de véhicules de prestige pour votre
            plaisir de conduire.
          </a-checkbox>
          <br />
          <a-checkbox @change="onChange">
            Découvre un ensemble de voitures de luxe pour te déplacer avec style
          </a-checkbox>
          <br />
          <a-checkbox @change="onChange">
            Découvrez un ensemble de voitures de grandes marques de luxe à louer
            immédiatement.</a-checkbox
          >
          <br />
          <br />

          <h5>
            Maintenant, admettons que vous soyez responsable de la stratégie
            éditoriale de Scooters pour adolescents. Quel ton serait-il
            judicieux d'adopter pour s'adresser au marché français ?
          </h5>
          <img src="/images/trotinette.png" alt="" />
          <em>Attention, plusieurs réponses sont possibles.</em><br />
          <a-checkbox @change="onChange"
            >Scooter, la nouvelle façon de se déplacer en toutes simplicité et
            rapidité.</a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            La nouvelle planche qui va te permettre de te déplacer et t’amuser
            avec tes amis et ta famille.
          </a-checkbox>
          <br />
          <a-checkbox @change="onChange"
            >Une nouvelle technologie à votre disposition pour vous déplacer
            sereinement et en toute tranquillité.</a-checkbox
          >
          <br />
          <a-checkbox @change="onChange">
            Vous n'arriverez plus à vous en séparer dans le cadre de vos
            déplacements. </a-checkbox
          ><br />
          <a-checkbox @change="onChange">
            Tu vas devenir accro à ce nouveau mode de déplacement !
          </a-checkbox>
          <br />
        </div>
        <a-button
          type="primary"
          style="width: 100%"
          @click="makePDFM"
          v-if="marquetingA"
        >
          J'ai terminé
        </a-button>
        <div v-if="over2">
          <img src="images/over.png" alt="" width="100%" />
        </div>
      </a-tab-pane>
    </a-tabs>

    <script type="application/javascript">
      function rafraichir() {
        var code_html = document.getElementById("code-HTML").value;
        var code_css =
          "<style>" + document.getElementById("code-CSS").value + "</style>";
        var code_js =
          "<scri" +
          "pt>" +
          document.getElementById("code-JS").value +
          "</scri" +
          "pt>";
        var page = document.getElementById("res").contentWindow.document;
        page.open();
        page.write(code_html + code_css + code_js);
        page.close();
      }
    </script>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default {
  data() {
    return {
      devA: false,
      graphisteA: false,
      marquetingA: false,
      minutes: 60,
      seconds: 0,
      over: false,
      over1: false,
      over2: false,
      buttonDev: true,
      buttonMarqueting: true,
      buttonGraphiste: true,
      couleur: "color: green;",
    };
  },
  methods: {
    dev() {
      this.buttonDev = false;
      this.buttonMarqueting = false;
      this.buttonGraphiste = false;
      this.devA = true;
      if (this.seconds == 0) {
        if (this.minutes == 0) {
          //this.timerComplete()
          this.over = true;
          this.devA = false;
          return null;
        }
        if (this.minutes == 10) {
          this.couleur = "color: red;";
          this.e(
            "Il vous reste moins de 10 minutes à envoyez votre composition"
          );
          var audio = new Audio("./audios/over.wav");
          audio.play();
        }
        setTimeout(() => {
          this.seconds = 59;
          this.minutes--;
          this.dev();
        }, 1000);
      } else {
        setTimeout(() => {
          this.seconds--;
          this.dev();
        }, 1000);
      }
    },
    graphiste() {
      this.graphisteA = true;
      this.buttonDev = false;
      this.buttonMarqueting = false;
      this.buttonGraphiste = false;
      if (this.seconds == 0) {
        if (this.minutes == 0) {
          //this.timerComplete()
          this.over1 = true;
          this.graphisteA = false;
          return null;
        }
        if (this.minutes == 10) {
          this.couleur = "color: red;";
          this.e(
            "Il vous reste moins de 10 minutes à envoyez votre composition"
          );
          var audio = new Audio("./audios/over.wav");
          audio.play();
        }
        setTimeout(() => {
          this.seconds = 59;
          this.minutes--;
          this.graphiste();
        }, 1000);
      } else {
        setTimeout(() => {
          this.seconds--;
          this.graphiste();
        }, 1000);
      }
    },
    marqueting() {
      this.marquetingA = true;
      this.buttonDev = false;
      this.buttonMarqueting = false;
      this.buttonGraphiste = false;
      if (this.seconds == 0) {
        if (this.minutes == 0) {
          //this.timerComplete()
          this.over2 = true;
          this.marquetingA = false;
          return null;
        }
        if (this.minutes == 10) {
          this.couleur = "color: red;";
          this.e(
            "Il vous reste moins de 10 minutes à envoyez votre composition"
          );
          var audio = new Audio("./audios/over.wav");
          audio.play();
        }
        setTimeout(() => {
          this.seconds = 59;
          this.minutes--;
          this.marqueting();
        }, 1000);
      } else {
        setTimeout(() => {
          this.seconds--;
          this.marqueting();
        }, 1000);
      }
    },
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    makePDF() {
      window.html2canvas = html2canvas;
      var doc = new jsPDF("p", "pt", "a4");
      doc.html(document.querySelector("#test"), {
        callback: function (pdf) {
          pdf.save("testDEV.pdf");
        },
      });
    },
    makePDFM() {
      window.html2canvas = html2canvas;
      var doc = new jsPDF("p", "pt", "a4");
      doc.html(document.querySelector("#testM"), {
        callback: function (pdf) {
          pdf.save("testM.pdf");
        },
      });
    },
  },
  computed: {
    secondsShown: function () {
      if (this.seconds < 10) {
        return "0" + parseInt(this.seconds, 10);
      }
      return this.seconds;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
section {
  display: flex;
  width: 100%;
}
.code {
  display: flex;
  width: 40%;
  height: 100%;
  flex-direction: column;
  background-color: #222;
}
textarea {
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  height: 33.33%;
  outline: 0;
  border: 0;
  background-color: #222;
  resize: none;
  padding: 10px;
  color: #fff;
  border: 0px;
  font-size: 18px;
}
.labelE {
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  width: 100%;
  padding: 5px 62px;
  border-top: 1px solid #5a5a5a;
  border-radius: 50px 50px 0 0;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
label i {
  font-size: 25px;
}
iframe {
  width: 60%;
  border: 0;
}
textarea::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
textarea::-webkit-scrollbar-thumb {
  background-color: #a1a1a1;
  border: 31px none #ffffff;
  border-radius: 5px;
}
</style>