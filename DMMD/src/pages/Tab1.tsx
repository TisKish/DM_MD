import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

import {
  IonCol,
  IonGrid,
  IonRow,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonList,
  IonInput,
  IonFab,
  IonFabButton,
  IonPopover,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonAvatar,
} from "@ionic/react";

import { helpCircleOutline, addCircleOutline } from "ionicons/icons";

const currentConditions = [];

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Players</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Home page" />
        <IonGrid>
          <IonRow>
            <IonCol size="auto">
              {/* ========== First character slot ========== */}
              <IonCard>
                <IonCardHeader>
                  <IonAvatar aria-hidden="true" slot="start">
                    <img
                      src={
                        "https://ionicframework.com/docs/img/demos/avatar.svg"
                      }
                      alt="avatar"
                    />
                  </IonAvatar>
                  <IonCardTitle>Jelly</IonCardTitle>
                  <IonCardSubtitle>Druid/Warlock</IonCardSubtitle>

                  {/* ----- Creature type ----- */}
                  <IonSelect label="Creature Type" labelPlacement="start">
                    <IonSelectOption value="humanoid">Humanoid</IonSelectOption>
                    <IonSelectOption value="fey">Fey</IonSelectOption>
                    <IonSelectOption value="orange">Orange</IonSelectOption>
                  </IonSelect>
                </IonCardHeader>

                <IonCardContent>
                  <IonList>
                    {/* ----- Passive Perception ----- */}
                    <IonItem>
                      <IonLabel>
                        Passive Perception
                        <IonIcon
                          icon={helpCircleOutline}
                          id="passive-perception"
                          size="small"
                          aria-hidden="true"
                        ></IonIcon>
                      </IonLabel>

                      <IonPopover
                        trigger="passive-perception"
                        triggerAction="click"
                      >
                        <IonContent class="ion-padding">
                          Check against this number for hidden items or stealthy
                          creatures
                        </IonContent>
                      </IonPopover>
                      <span style={{ textAlign: "center" }}>
                        <h1>
                          <IonInput
                            type="number"
                            placeholder="Enter value"
                          ></IonInput>
                        </h1>
                      </span>
                    </IonItem>

                    {/* ----- Languages Known ----- */}
                    <IonItem>
                      <IonLabel>Languages known:</IonLabel>
                      <span style={{ textAlign: "right" }}>
                        <IonSelect
                          aria-label="Languages"
                          placeholder="Select all languages that apply"
                          multiple={true}
                        >
                          <IonSelectOption value="langDraconic">
                            Draconic
                          </IonSelectOption>
                          <IonSelectOption value="langDwarvish">
                            Dwarvish
                          </IonSelectOption>
                          <IonSelectOption value="langElvish">
                            Elvish
                          </IonSelectOption>
                          <IonSelectOption value="langGiant">
                            Giant
                          </IonSelectOption>
                          <IonSelectOption value="langGnomish">
                            Gnomish
                          </IonSelectOption>
                          <IonSelectOption value="langGoblin">
                            Goblin
                          </IonSelectOption>
                          <IonSelectOption value="langHalfling">
                            Halfling
                          </IonSelectOption>
                          <IonSelectOption value="langOrc">Orc</IonSelectOption>
                          <IonSelectOption value="langAbyssal">
                            Abyssal
                          </IonSelectOption>
                          <IonSelectOption value="langCelestial">
                            Celestial
                          </IonSelectOption>
                          <IonSelectOption value="langDeepspeech">
                            Deep Speech
                          </IonSelectOption>
                          <IonSelectOption value="langDruidic">
                            Druidic
                          </IonSelectOption>
                          <IonSelectOption value="langInfernal">
                            Infernal
                          </IonSelectOption>
                          <IonSelectOption value="langPrimordial">
                            Primordial
                          </IonSelectOption>
                          <IonSelectOption value="langSylvan">
                            Sylvan
                          </IonSelectOption>
                          <IonSelectOption value="langThieves">
                            Thieves' Cant
                          </IonSelectOption>
                          <IonSelectOption value="langUndercommon">
                            Undercommon
                          </IonSelectOption>
                        </IonSelect>
                      </span>
                    </IonItem>

                    {/* ----- Tool Proficiencies ----- */}
                    <IonItem>
                      <IonLabel>Tool Proficiencies:</IonLabel>
                      <span style={{ textAlign: "right" }}>
                        <IonSelect
                          aria-label="Tools"
                          placeholder="Select all proficiencies that apply"
                          multiple={true}
                        >
                          <IonSelectOption value="toolAlchemist">
                            Alchemist's Supplies
                          </IonSelectOption>
                          <IonSelectOption value="toolHerbalism">
                            Herbalism Kit
                          </IonSelectOption>
                          <IonSelectOption value="toolPoisoner">
                            Poisoner's Kit
                          </IonSelectOption>
                          <IonSelectOption value="toolCalligrapher">
                            Calligrapher's Supplies
                          </IonSelectOption>
                          <IonSelectOption value="toolSmith">
                            Smith's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolTinker">
                            Tinker's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolCook">
                            Cook's Utensils
                          </IonSelectOption>
                          <IonSelectOption value="toolMason">
                            Mason's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolBeekeeper">
                            Beekeeper's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolChandler">
                            Chandler's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolGardener">
                            Gardener's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolGunsmith">
                            Gunsmith's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolWeaver">
                            Weaver's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolHealer">
                            Healer's Kit
                          </IonSelectOption>
                          <IonSelectOption value="toolCartographer">
                            Cartographer's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolDisguise">
                            Disguise Kit
                          </IonSelectOption>
                          <IonSelectOption value="toolThieves">
                            Thieves' Tools
                          </IonSelectOption>
                        </IonSelect>
                      </span>
                    </IonItem>

                    {/* ----- Current Conditions ----- */}
                    <IonItem>
                      <IonLabel>Current Conditions</IonLabel>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>

            {/* ========== Second character slot ========== */}
            <IonCol size="auto">
              <IonCard>
                <IonCardHeader>
                  <IonAvatar aria-hidden="true" slot="start">
                    <img
                      src={
                        "https://ionicframework.com/docs/img/demos/avatar.svg"
                      }
                      alt="avatar"
                    />
                  </IonAvatar>
                  <IonCardTitle>Jelly</IonCardTitle>
                  <IonCardSubtitle>Druid/Warlock</IonCardSubtitle>

                  {/* ----- Creature type ----- */}
                  <IonSelect label="Creature Type" labelPlacement="start">
                    <IonSelectOption value="humanoid">Humanoid</IonSelectOption>
                    <IonSelectOption value="fey">Fey</IonSelectOption>
                    <IonSelectOption value="orange">Orange</IonSelectOption>
                  </IonSelect>
                </IonCardHeader>

                <IonCardContent>
                  <IonList>
                    {/* ----- Passive Perception ----- */}
                    <IonItem>
                      <IonLabel>
                        Passive Perception
                        <IonIcon
                          icon={helpCircleOutline}
                          id="passive-perception2"
                          size="small"
                          aria-hidden="true"
                        ></IonIcon>
                      </IonLabel>

                      <IonPopover
                        trigger="passive-perception2"
                        triggerAction="click"
                      >
                        <IonContent class="ion-padding">
                          Check against this number for hidden items or stealthy
                          creatures
                        </IonContent>
                      </IonPopover>
                      <span style={{ textAlign: "center" }}>
                        <h1>
                          <IonInput
                            type="number"
                            placeholder="Enter value"
                          ></IonInput>
                        </h1>
                      </span>
                    </IonItem>

                    {/* ----- Languages Known ----- */}
                    <IonItem>
                      <IonLabel>Languages known:</IonLabel>
                      <span style={{ textAlign: "right" }}>
                        <IonSelect
                          aria-label="Languages"
                          placeholder="Select all languages that apply"
                          multiple={true}
                        >
                          <IonSelectOption value="langDraconic">
                            Draconic
                          </IonSelectOption>
                          <IonSelectOption value="langDwarvish">
                            Dwarvish
                          </IonSelectOption>
                          <IonSelectOption value="langElvish">
                            Elvish
                          </IonSelectOption>
                          <IonSelectOption value="langGiant">
                            Giant
                          </IonSelectOption>
                          <IonSelectOption value="langGnomish">
                            Gnomish
                          </IonSelectOption>
                          <IonSelectOption value="langGoblin">
                            Goblin
                          </IonSelectOption>
                          <IonSelectOption value="langHalfling">
                            Halfling
                          </IonSelectOption>
                          <IonSelectOption value="langOrc">Orc</IonSelectOption>
                          <IonSelectOption value="langAbyssal">
                            Abyssal
                          </IonSelectOption>
                          <IonSelectOption value="langCelestial">
                            Celestial
                          </IonSelectOption>
                          <IonSelectOption value="langDeepspeech">
                            Deep Speech
                          </IonSelectOption>
                          <IonSelectOption value="langDruidic">
                            Druidic
                          </IonSelectOption>
                          <IonSelectOption value="langInfernal">
                            Infernal
                          </IonSelectOption>
                          <IonSelectOption value="langPrimordial">
                            Primordial
                          </IonSelectOption>
                          <IonSelectOption value="langSylvan">
                            Sylvan
                          </IonSelectOption>
                          <IonSelectOption value="langThieves">
                            Thieves' Cant
                          </IonSelectOption>
                          <IonSelectOption value="langUndercommon">
                            Undercommon
                          </IonSelectOption>
                        </IonSelect>
                      </span>
                    </IonItem>

                    {/* ----- Tool Proficiencies ----- */}
                    <IonItem>
                      <IonLabel>Tool Proficiencies:</IonLabel>
                      <span style={{ textAlign: "right" }}>
                        <IonSelect
                          aria-label="Tools"
                          placeholder="Select all proficiencies that apply"
                          multiple={true}
                        >
                          <IonSelectOption value="toolAlchemist">
                            Alchemist's Supplies
                          </IonSelectOption>
                          <IonSelectOption value="toolHerbalism">
                            Herbalism Kit
                          </IonSelectOption>
                          <IonSelectOption value="toolPoisoner">
                            Poisoner's Kit
                          </IonSelectOption>
                          <IonSelectOption value="toolCalligrapher">
                            Calligrapher's Supplies
                          </IonSelectOption>
                          <IonSelectOption value="toolSmith">
                            Smith's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolTinker">
                            Tinker's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolCook">
                            Cook's Utensils
                          </IonSelectOption>
                          <IonSelectOption value="toolMason">
                            Mason's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolBeekeeper">
                            Beekeeper's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolChandler">
                            Chandler's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolGardener">
                            Gardener's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolGunsmith">
                            Gunsmith's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolWeaver">
                            Weaver's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolHealer">
                            Healer's Kit
                          </IonSelectOption>
                          <IonSelectOption value="toolCartographer">
                            Cartographer's Tools
                          </IonSelectOption>
                          <IonSelectOption value="toolDisguise">
                            Disguise Kit
                          </IonSelectOption>
                          <IonSelectOption value="toolThieves">
                            Thieves' Tools
                          </IonSelectOption>
                        </IonSelect>
                      </span>
                    </IonItem>

                    {/* ----- Current Conditions ----- */}
                    <IonItem>
                      <IonLabel>Current Conditions</IonLabel>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>3</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>1</IonCol>
            <IonCol>2</IonCol>
            <IonCol>3</IonCol>
          </IonRow>
        </IonGrid>

        {/* ----- Add button at bottom of page ----- */}
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={addCircleOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
