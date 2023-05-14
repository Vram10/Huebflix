import Home from "./Home"
import NavBar from "./NavBar"
import VideoSite from "./VideoSite"
import "./styles.css"

import { Route, Routes } from "react-router-dom"


export default function App(){


  const mario1 = [{url: "https://www.youtube.com/embed/YWilvcd3N6I?autoplay=1", img:"assets\\img\\mario1\\t1.jpg", titel:"Das beste Fangame aller Zeiten!", id:0, key:0}, {url: "https://www.youtube.com/embed/xU4G3eZm6Rc?autoplay=1", img:"assets\\img\\mario1\\t2.jpg", titel:"Der geheime gelbe Schalterpalast", id:0, key:1}, {url: "https://www.youtube.com/embed/2aL0VLWXUWc?autoplay=1", img:"assets\\img\\mario1\\t3.jpg", titel:"Die geheime Herbstwelt", id:0, key:2},
                  {url: "https://www.youtube.com/embed/PmAteqO6os0?autoplay=1", img:"assets\\img\\mario1\\t4.jpg", titel:"Die unterirdische Röhrenwelt!", id:0, key:3},
                  {url: "https://www.youtube.com/embed/5gY-OZ3fc6Q?autoplay=1", img:"assets\\img\\mario1\\t5.jpg", titel:"Die Wüstenruinen ", id:0, key:4},
                  {url: "https://www.youtube.com/embed/B0nYmNRl5P4?autoplay=1", img:"assets\\img\\mario1\\t6.jpg", titel:"Das Pyramidenschloss", id:0, key:5}, 
                  {url: "https://www.youtube.com/embed/mXtABT2rx1Q?autoplay=1", img:"assets\\img\\mario1\\t7.jpg", titel:"Die Mini Mega Insel", id:0, key:6},
                  {url: "https://www.youtube.com/embed/FBmgDI2ybkk?autoplay=1", img:"assets\\img\\mario1\\t8.jpg", titel:"Auf den Pilzspitzen", id:0, key:7},
                  {url: "https://www.youtube.com/embed/WV-UPMhfhfA?autoplay=1", img:"assets\\img\\mario1\\t9.jpg", titel:"Unterwasser im Blasenbecken", id:0, key:8},
                  {url: "https://www.youtube.com/embed/W5NfZJK2jFI?autoplay=1", img:"assets\\img\\mario1\\t10.jpg", titel:"Das japanische Sakura Dorf", id:0, key:9},
                  {url: "https://www.youtube.com/embed/WV6i9iUFkyM?autoplay=1", img:"assets\\img\\mario1\\t11.jpg", titel:"Boss Fight gegen den Shy Guy Samurai", id:0, key:10},
                  {url: "https://www.youtube.com/embed/fkXIu8j3VQI?autoplay=1", img:"assets\\img\\mario1\\t12.jpg", titel:"Die Himmelstadt", id:0, key:11},
                  {url: "https://www.youtube.com/embed/ldIcb9JleNA?autoplay=1", img:"assets\\img\\mario1\\t13.jpg", titel:"Auf dem Flammengletscher", id:0, key:12},
                  {url: "https://www.youtube.com/embed/g_08tJL5ONc?autoplay=1", img:"assets\\img\\mario1\\t14.jpg", titel:"Das Schneeballfeld", id:0, key:13},
                  {url: "https://www.youtube.com/embed/K9XNZD6nQgw?autoplay=1", img:"assets\\img\\mario1\\t15.jpg", titel:"In der Magma Eishöhle", id:0, key:14},
                  {url: "https://www.youtube.com/embed/pjUXIRhR8hs?autoplay=1", img:"assets\\img\\mario1\\t16.jpg", titel:"Die Kristallhöhle", id:0, key:15},
                  {url: "https://www.youtube.com/embed/wMDuzANhcFA?autoplay=1", img:"assets\\img\\mario1\\t17.jpg", titel:"In der giftigen Wigglerhölle", id:0, key:16},
                  {url: "https://www.youtube.com/embed/0UYxJxwJVqQ?autoplay=1", img:"assets\\img\\mario1\\t18.jpg", titel:"Der Kürbis Friedhof", id:0, key:17},
                  {url: "https://www.youtube.com/embed/a49Crk72EbU?autoplay=1", img:"assets\\img\\mario1\\t19.jpg", titel:"Das Schloss der Täuschungen", id:0, key:18},
                  {url: "https://www.youtube.com/embed/pPS30LV_adM?autoplay=1", img:"assets\\img\\mario1\\t20.jpg", titel:"Die Bomb-Omb Klippen", id:0, key:19},
                  {url: "https://www.youtube.com/embed/YSN9bD9baco?autoplay=1", img:"assets\\img\\mario1\\t21.jpg", titel:"Der Asteroidengürtel", id:0, key:20},
                  {url: "https://www.youtube.com/embed/DXxf17yKHfU?autoplay=1", img:"assets\\img\\mario1\\t22.jpg", titel:"Im Sternenhimmel", id:0, key:21},
                  {url: "https://www.youtube.com/embed/UsDdty2fOOg?autoplay=1", img:"assets\\img\\mario1\\t23.jpg", titel:"Bowser's Schloss", id:0, key:22},
                  {url: "https://www.youtube.com/embed/mScRKdoBJLE?autoplay=1", img:"assets\\img\\mario1\\t24.jpg", titel:"Auf der Knochenbahn", id:0, key:23},
                  {url: "https://www.youtube.com/embed/EyM2WgpIP9U?autoplay=1", img:"assets\\img\\mario1\\t25.jpg", titel:"Final Boss mit Bowser's Luftschiff", id:0, key:24},
                  {url: "https://www.youtube.com/embed/LW6zSFHv2jg?autoplay=1", img:"assets\\img\\mario1\\t26.jpg", titel:"Die Spezialwelt", id:0, key:25},
                  {url: "https://www.youtube.com/embed/XylsV-pcHh0?autoplay=1", img:"assets\\img\\mario1\\t27.jpg", titel:"Die letzten Level zu den 100% [ENDE]", id:0, key:26},

                ]
  
  const mario2 = [{url: "https://www.youtube.com/embed/7TJK42qTy_A?autoplay=1", img:"assets\\img\\mario2\\t1.jpg", titel:"Mario Galaxy bekommt eine Open World!", id:3, key:0},
                  {url: "https://www.youtube.com/embed/Y741rt1ZXJg?autoplay=1", img:"assets\\img\\mario2\\t2.jpg", titel:"Mit Feuer-Yoshi auf Bob-Ombs Bombenberg!", id:3, key:1},
                  {url: "https://www.youtube.com/embed/t9sLreEUooo?autoplay=1", img:"assets\\img\\mario2\\t3.jpg", titel:"Das Geheimnis der Eisblöcke!", id:3, key:2},
                  {url: "https://www.youtube.com/embed/4B8PbZEWWSE?autoplay=1", img:"assets\\img\\mario2\\t4.jpg", titel:"Es geht in die Regenbogen-Raserei!", id:3, key:3},
                  {url: "https://www.youtube.com/embed/1uLBwQzS9yE?autoplay=1", img:"assets\\img\\mario2\\t5.jpg", titel:"Beta-Galaxie als Belohnung für die 100%! [ENDE]", id:3, key:4},
                ]

  const growHome = [
    {url: "https://www.youtube.com/embed/_EhYEffnzZE?autoplay=1", img:"assets\\img\\growHome\\t1.jpg", titel:"Nach Hause... wachsen?", id:4, key:0},
    {url: "https://www.youtube.com/embed/KJJguZK_vAc?autoplay=1", img:"assets\\img\\growHome\\t2.jpg", titel:"Die Kristalle bringen coole Fähigkeiten!", id:4, key:1},
    {url: "https://www.youtube.com/embed/vHcv-xZuITo?autoplay=1", img:"assets\\img\\growHome\\t3.jpg", titel:"Der Gleiter ist unnormal krass!", id:4, key:2},
    {url: "https://www.youtube.com/embed/eKFOdJxCg8k?autoplay=1", img:"assets\\img\\growHome\\t4.jpg", titel:"Astronomische Höhen!", id:4, key:3},
    {url: "https://www.youtube.com/embed/l2KspJ8LyCo?autoplay=1", img:"assets\\img\\growHome\\t5.jpg", titel:"Wir erreichen unser Raumschiff!", id:4, key:4},
    {url: "https://www.youtube.com/embed/6w8bcbpwpPQ?autoplay=1", img:"assets\\img\\growHome\\t6.jpg", titel:"Alle Samen, Kristalle & Datenbankeinträge! [ENDE]", id:4, key:5},            ]

  const zelda1 = [{url: "https://www.youtube.com/embed/AYdzoXl2hEI?autoplay=1", img:"", titel:"links cap ist interessant", id:1, key:0}, {url: "https://www.youtube.com/embed/_IGTOx2ZG10?autoplay=1", img:"", titel:"Links cap ist cool", id:1, key:1}, {url: "https://www.youtube.com/embed/KB2x9IhnS20?autoplay=1", img:"", titel:"links cap ist sehr cool", id:1, key:2},]

  const zelda2 = [
  {url: "https://www.youtube.com/embed/8shIpUw7uEE?autoplay=1", img:"assets\\img\\zelda2\\t1.jpg", titel:" Das Triforce wurde zerbrochen", id:5, key:0},
  {url: "https://www.youtube.com/embed/qe9-d9P9Ehk?autoplay=1", img:"assets\\img\\zelda2\\t2.jpg", titel:"Boss Dodongo & verbesserter Bumerang!", id:5, key:1},
  {url: "https://www.youtube.com/embed/g-RUKSBLG4I?autoplay=1", img:"assets\\img\\zelda2\\t3.jpg", titel:" ES IST SO SCHWEEER!", id:5, key:2},
  {url: "https://www.youtube.com/embed/vQdRxhVVK8c?autoplay=1", img:"assets\\img\\zelda2\\t4.jpg", titel:"Neue Herzcontainer & weißes Schwert!", id:5, key:3},
  {url: "https://www.youtube.com/embed/rXo8uFIf7Lg?autoplay=1", img:"assets\\img\\zelda2\\t5.jpg", titel:" Auf diesem Friedhof landen bald meine Nerven!", id:5, key:4},
  {url: "https://www.youtube.com/embed/x-KZfRTdzY4?autoplay=1", img:"assets\\img\\zelda2\\t6.jpg", titel:"Dieser Stab könnte einiges ändern!", id:5, key:5},
  {url: "https://www.youtube.com/embed/LJcn-t59LW4?autoplay=1", img:"assets\\img\\zelda2\\t7.jpg", titel:"Boss Digdogger in die Hölle flöten", id:5, key:6},
  {url: "https://www.youtube.com/embed/C1imcs8C9ZY?autoplay=1", img:"assets\\img\\zelda2\\t8.jpg", titel:" Der Boss des ersten Dungeons ist zurück?", id:5, key:7},
  {url: "https://www.youtube.com/embed/zK-R_o6q92U?autoplay=1", img:"assets\\img\\zelda2\\t9.jpg", titel:"Das Triforce-Fragment ist komplett!", id:5, key:8},
  {url: "https://www.youtube.com/embed/Ym1ceuWf_NM?autoplay=1", img:"assets\\img\\zelda2\\t10.jpg", titel:"Der letzte Dungeon des Spiels!", id:5, key:9},
  {url: "https://www.youtube.com/embed/7JEskOt9RHo?autoplay=1", img:"assets\\img\\zelda2\\t11.jpg", titel:"Final Ganon Fight! [ENDE]", id:5, key:10},]  

  const subnautica1 = [
    {url: "https://www.youtube.com/embed/uK9wQW-CWTE?autoplay=1", img:"assets\\img\\subnautica1\\t1.jpg", titel:" Auf Unterwasser Expedition", id:2, key:0},
    {url: "https://www.youtube.com/embed/BnwuXfXXux4?autoplay=1", img:"assets\\img\\subnautica1\\t2.jpg", titel:"Funksprüche aus der Tiefe", id:2, key:1},
    {url: "https://www.youtube.com/embed/qLt5kodVXbE?autoplay=1", img:"assets\\img\\subnautica1\\t3.jpg", titel:"Jeder braucht ein Zuhause", id:2, key:2},
    {url: "https://www.youtube.com/embed/iFIu50S3l0E?autoplay=1", img:"assets\\img\\subnautica1\\t4.jpg", titel:"Leben am Limit", id:2, key:3},
    {url: "https://www.youtube.com/embed/Co55RNYDDxI?autoplay=1", img:"assets\\img\\subnautica1\\t5.jpg", titel:"Endlich motorisiert!", id:2, key:4},
    {url: "https://www.youtube.com/embed/dzO_R7cmKMs?autoplay=1", img:"assets\\img\\subnautica1\\t6.jpg", titel:"Festland!", id:2, key:5},
    {url: "https://www.youtube.com/embed/TRTzWesCHPw?autoplay=1", img:"assets\\img\\subnautica1\\t7.jpg", titel:"Garagenbau für unseren Fuhrpark", id:2, key:6},
    {url: "https://www.youtube.com/embed/Jf57CxPt99U?autoplay=1", img:"assets\\img\\subnautica1\\t8.jpg", titel:"Ist das Alien-Technologie?!", id:2, key:7},
    {url: "https://www.youtube.com/embed/Jv_RUusy8KM?autoplay=1", img:"assets\\img\\subnautica1\\t9.jpg", titel:"Rettung durch die Sunbeam?", id:2, key:8},
    {url: "https://www.youtube.com/embed/AVf73pCcOFc?autoplay=1", img:"assets\\img\\subnautica1\\t10.jpg", titel:"Wir werden grün!", id:2, key:9},
    {url: "https://www.youtube.com/embed/97M0ME1DgT4?autoplay=1", img:"assets\\img\\subnautica1\\t11.jpg", titel:"Wir betreten die Aurora", id:2, key:10},
    {url: "https://www.youtube.com/embed/8UHckx1HUJ8?autoplay=1", img:"assets\\img\\subnautica1\\t12.jpg", titel:"Tödliche Schatten", id:2, key:11},
    {url: "https://www.youtube.com/embed/rei5-_bR8d0?autoplay=1", img:"assets\\img\\subnautica1\\t13.jpg", titel:"Die Produktion beginnt", id:2, key:12},
    {url: "https://www.youtube.com/embed/DcGGSdGk0v4?autoplay=1", img:"assets\\img\\subnautica1\\t14.jpg", titel:"Der Zyklop", id:2, key:13},
    {url: "https://www.youtube.com/embed/fK-ybTF9_FE?autoplay=1", img:"assets\\img\\subnautica1\\t15.jpg", titel:"Endlich modifizieren!", id:2, key:14},
    {url: "https://www.youtube.com/embed/a6sL0Fu43GI?autoplay=1", img:"assets\\img\\subnautica1\\t16.jpg", titel:"Das Geleepilz Biom", id:2, key:15},
    {url: "https://www.youtube.com/embed/U8-uv-_VabQ?autoplay=1", img:"assets\\img\\subnautica1\\t17.jpg", titel:"Das versunkene Skelett", id:2, key:16},
    {url: "https://www.youtube.com/embed/gzwtuG8RXlc?autoplay=1", img:"assets\\img\\subnautica1\\t18.jpg", titel:"Die Forschungseinrichtung für Krankheiten", id:2, key:17},
    {url: "https://www.youtube.com/embed/dnkDnHaa-Tg?autoplay=1", img:"assets\\img\\subnautica1\\t19.jpg", titel:"1300 Meter in der Tiefe", id:2, key:18},
    {url: "https://www.youtube.com/embed/XSZgFASM8so?autoplay=1", img:"assets\\img\\subnautica1\\t20.jpg", titel:"Hilfreiche Upgrades", id:2, key:19},
    {url: "https://www.youtube.com/embed/ANtmUhodAX8?autoplay=1", img:"assets\\img\\subnautica1\\t21.jpg", titel:"Bohrerarm und Wurfhakenarm", id:2, key:20},
    {url: "https://www.youtube.com/embed/U5h9O4hy26Q?autoplay=1", img:"assets\\img\\subnautica1\\t22.jpg", titel:"Der Seedrache will Stress!", id:2, key:21},
    {url: "https://www.youtube.com/embed/wzMMOoC36U0?autoplay=1", img:"assets\\img\\subnautica1\\t23.jpg", titel:"Die seltene blaue Tafel", id:2, key:22},
    {url: "https://www.youtube.com/embed/OwDA5U8lL-Q?autoplay=1", img:"assets\\img\\subnautica1\\t24.jpg", titel:"Die tiefste Alien-Basis im Ozean", id:2, key:23},
    {url: "https://www.youtube.com/embed/2WHFEJ59et0?autoplay=1", img:"assets\\img\\subnautica1\\t25.jpg", titel:"Der See-Imperator", id:2, key:24},
    {url: "https://www.youtube.com/embed/L_hBxoetU34?autoplay=1", img:"assets\\img\\subnautica1\\t26.jpg", titel:"Flucht vom Planeten mit Neptun Rakete [Ende]", id:2, key:25},
  ]
 
  const zeldatotk = [
    {url: "https://www.youtube.com/embed/0XouEvpmatI?autoplay=1", img:"assets\\img\\zeldatotk\\t1.jpg", titel:"Der direkte Nachfolger zu Breath of the Wild!", id:6, key:0},
    {url: "https://www.youtube.com/embed/UFEdXrB85uc?autoplay=1", img:"assets\\img\\zeldatotk\\t2.jpg", titel:"Die neuen Schreine! (Schaffenskraft - Uko Uho Schrein)", id:6, key:1},
    {url: "https://www.youtube.com/embed/qrVqiYTO2TQ?autoplay=1", img:"assets\\img\\zeldatotk\\t3.jpg", titel:" Die Synthese-Fähigkeit aus dem In-iza-Schrein", id:6, key:2},
    {url: "https://www.youtube.com/embed/bY9G-T9JnWM?autoplay=1", img:"assets\\img\\zeldatotk\\t4.jpg", titel:"Mit neuen Waffen in Richtung Bannschrein", id:6, key:3},
    {url: "https://www.youtube.com/embed/-IoN87SUQfc?autoplay=1", img:"assets\\img\\zeldatotk\\t5.jpg", titel:"Erster Miniboss: Alpha-Blockkonstrukt", id:6, key:4},
    {url: "https://www.youtube.com/embed/4CxsHW7uMHs?autoplay=1", img:"assets\\img\\zeldatotk\\t6.jpg", titel:"Der legendäre Decken(-lampen)sprung", id:6, key:5},
    {url: "https://www.youtube.com/embed/4JyRohjPWH8?autoplay=1", img:"assets\\img\\zeldatotk\\t7.jpg", titel:"Das Wiedersehen mit Zelda?!", id:6, key:6},
    {url: "https://www.youtube.com/embed/b9n1M-EwXXw?autoplay=1", img:"assets\\img\\zeldatotk\\t8.jpg", titel:"Hyrule & der Spähposten", id:6, key:7},] 


  return(
    <>
    <NavBar />

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video0" element={<VideoSite playList={mario1}/>} />
        <Route path="/video1" element={<VideoSite playList={zelda1} />} />
        <Route path="/video2" element={<VideoSite playList={subnautica1} />} />
        <Route path="/video3" element={<VideoSite playList={mario2} />} />
        <Route path="/video4" element={<VideoSite playList={growHome} />} />
        <Route path="/video5" element={<VideoSite playList={zelda2} />} />
        <Route path="/video6" element={<VideoSite playList={zeldatotk} />} />
      </Routes>
    </div>

    


    </>

  )
}