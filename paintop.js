var sound;
var startupSounds = ['https://myinstants.com/media/sounds/brain-fart.mp3','https://myinstants.com/media/sounds/fart-with-reverb.mp3','https://www.myinstants.com/media/sounds/yt1s_Umv6I50.mp3','https://www.myinstants.com/media/sounds/aughhhhh-aughhhhh.mp3','https://www.myinstants.com/media/sounds/yt1s_wU4BGgD.mp3','https://www.myinstants.com/media/sounds/bad-to-the-bone.mp3','https://www.myinstants.com/media/sounds/taco-bell-bong-sfx.mp3'];
var array;
let username = document.getElementsByClassName("accountInfoName")[0].textContent;
let storage = window.localStorage;
        if (storage.paintop == undefined || storage.paintop == "") {
            storage.paintop = JSON.stringify({
                ads: '1'
            });
            if (username.includes("Siri")) {
                storage.paintop = JSON.stringify({
                    ads: '0'
                });
            }
        }
let postInput = document.getElementById("newPostArea");
let chatInput = document.getElementsByClassName("postChatInput")[0];
document.body.onkeydown = function checkKey(e) {
    var event = window.event ? window.event : e;
        if (event.keyCode == "8") {
            postInput.textContent = "";
            chatInput.textContent = "";
        }
    }
function loadPainMode() {
    const wireframeCode = '';
    let icon = `<g transform="translate(94,-84.95655)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M-61.36721,246.507c-18.02259,0 -32.63279,0 -32.63279,0v-160.427c0,0 14.6102,0 32.63279,0h367.11799c18.02259,0 32.63279,0 32.63279,0v160.427c0,0 -14.61019,0 -32.63279,0z" fill="var(--themeColor)" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"/><path d="M419.38158,199.499v28.501h-14.507c-24.462,0 -36.693,-12.117 -36.693,-36.352v-31.5733h-11.776v-27.8187h11.776v-23.2107h33.621v23.2107h17.408v27.8187h-17.408v32.0853c0,2.617 0.569,4.494 1.707,5.632c1.252,1.138 3.3,1.707 6.144,1.707zM479.26858,229.195c-9.558,0 -18.148,-1.991 -25.771,-5.974c-7.509,-3.982 -13.426,-9.671 -17.749,-17.066c-4.324,-7.396 -6.486,-16.1 -6.486,-26.1123c0,-9.8987 2.162,-18.5458 6.486,-25.9414c4.437,-7.3955 10.41,-13.0844 17.92,-17.0666c7.623,-3.9823 16.213,-5.9734 25.77,-5.9734c9.558,0 18.091,1.9911 25.6,5.9734c7.623,3.9822 13.597,9.6711 17.92,17.0666c4.438,7.3956 6.656,16.0427 6.656,25.9414c0,9.8983 -2.218,18.6023 -6.656,26.1123c-4.323,7.395 -10.297,13.084 -17.92,17.066c-7.623,3.983 -16.213,5.974 -25.77,5.974zM479.26858,200.181c4.665,0 8.533,-1.706 11.605,-5.12c3.186,-3.527 4.779,-8.533 4.779,-15.0183c0,-6.4854 -1.593,-11.4347 -4.779,-14.848c-3.072,-3.4134 -6.884,-5.12 -11.435,-5.12c-4.551,0 -8.362,1.7066 -11.434,5.12c-3.072,3.4133 -4.608,8.3626 -4.608,14.848c0,6.5993 1.479,11.6053 4.437,15.0183c2.958,3.414 6.77,5.12 11.435,5.12zM576.67458,145.568c2.617,-4.4373 6.315,-7.9644 11.094,-10.5813c4.778,-2.6169 10.41,-3.9254 16.896,-3.9254c7.623,0 14.506,1.9911 20.65,5.9734c6.258,3.9822 11.151,9.6711 14.678,17.0666c3.641,7.3956 5.461,16.0427 5.461,25.9414c0,9.8983 -1.82,18.6023 -5.461,26.1123c-3.527,7.395 -8.42,13.084 -14.678,17.066c-6.144,3.983 -13.027,5.974 -20.65,5.974c-6.486,0 -12.118,-1.309 -16.896,-3.926c-4.665,-2.617 -8.363,-6.144 -11.094,-10.581v59.051h-33.45v-141.483h33.45zM611.49058,180.0427c0,-6.2578 -1.706,-11.0934 -5.12,-14.5067c-3.299,-3.5271 -7.395,-5.2907 -12.288,-5.2907c-4.892,0 -9.045,1.7636 -12.458,5.2907c-3.3,3.5271 -4.95,8.3627 -4.95,14.5067c0,6.2573 1.65,11.1503 4.95,14.6773c3.413,3.527 7.566,5.291 12.458,5.291c4.893,0 8.989,-1.764 12.288,-5.291c3.414,-3.641 5.12,-8.533 5.12,-14.6773z" fill="var(--themeColor)\" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"/><path d="M319.1127,172.60532v57.0125h-38.53138v-52.13069c0.01144,-1.5597 -0.15113,-3.11581 -0.48469,-4.63946c-0.57536,-2.53738 -1.6633,-4.6813 -3.26384,-6.43177c-2.49902,-2.73148 -5.84072,-4.09723 -10.02513,-4.09723c-1.44274,-0.01271 -2.88083,0.16551 -4.27681,0.53002c-2.25545,0.58506 -4.28643,1.82659 -5.8355,3.5672c-1.50198,1.70712 -2.56011,3.75809 -3.08077,5.9715c-0.35103,1.40294 -0.54281,2.93082 -0.57536,4.58366c-0.00345,0.17201 -0.00519,0.34403 -0.00523,0.51608v52.13069h-38.70573v-98.33347h38.70573v14.99411c3.02207,-4.64934 7.06118,-8.42692 12.11733,-11.33275c3.2874,-1.86115 6.87687,-3.12887 10.60397,-3.74505c2.45815,-0.41828 4.9478,-0.62362 7.44126,-0.61371c3.8601,-0.03762 7.70571,0.47728 11.41994,1.52905c5.87266,1.68032 11.09963,5.0979 14.99411,9.80371c5.77447,6.88683 8.91685,15.99488 9.42711,27.32415c0.05023,1.11978 0.07522,2.24056 0.07497,3.36147zM-19.47525,190.38903h-15.34281v39.22878h-38.70573v-123.43989h54.04854c4.55784,-0.03087 9.10817,0.37431 13.58885,1.20999c8.66985,1.68073 15.73452,5.1131 21.19401,10.29712c8.07822,7.6714 12.11733,17.95806 12.11733,30.85997c0,7.78763 -1.80161,14.84882 -5.40485,21.18354c-3.16036,5.5103 -7.66273,10.13201 -13.08846,13.43542c-0.93498,0.58252 -1.89045,1.13149 -2.86458,1.64586c-3.92358,2.04207 -8.12087,3.5083 -12.46254,4.35352c-3.65554,0.74157 -7.579,1.14665 -11.77038,1.21523c-0.43642,0.0071 -0.87289,0.01059 -1.30937,0.01046zM102.22114,144.7093v-13.42496h38.53138v98.33348h-38.53138v-13.42496c-2.4409,4.53311 -5.98602,8.10728 -10.63536,10.72253c-3.00723,1.66619 -6.27867,2.80268 -9.6712,3.35973c-2.27706,0.38417 -4.58285,0.57258 -6.89206,0.56315c-7.67141,0 -14.58729,-2.00502 -20.74766,-6.01508c-4.62161,-3.04431 -8.52985,-7.05249 -11.45655,-11.74946c-1.15736,-1.82518 -2.19348,-3.72446 -3.10169,-5.68556c-2.03126,-4.43376 -3.46475,-9.11765 -4.26286,-13.92883c-0.72232,-4.29802 -1.07521,-8.65002 -1.05482,-13.00827c-0.01922,-4.28501 0.32139,-8.56405 1.0182,-12.79206c0.87175,-5.14682 2.30491,-9.86183 4.29948,-14.14503c1.62865,-3.56095 3.70698,-6.89845 6.1842,-9.93098c2.39393,-2.91222 5.21769,-5.44261 8.37403,-7.50403c6.16038,-4.01005 13.07626,-6.01508 20.74766,-6.01508c2.73816,-0.01581 5.47049,0.25415 8.15261,0.8055c2.94614,0.60405 5.78252,1.65534 8.41065,3.11738c4.64933,2.61525 8.19446,6.18943 10.63536,10.72253zM158.18754,131.28434h38.70573v98.33348h-38.70572zM170.82966,122.71154c2.26032,0.50089 4.57,0.74479 6.88509,0.72704c2.14309,0.01387 4.28159,-0.20004 6.37948,-0.63812c3.58096,-0.71887 6.9115,-2.36221 9.66074,-4.76673c1.79445,-1.55626 3.2654,-3.45018 4.32912,-5.57398c1.20416,-2.50185 1.81113,-5.24905 1.77314,-8.02533c-0.00012,-0.34477 -0.00826,-0.6895 -0.02441,-1.0339c-0.15117,-4.93551 -2.35395,-9.58432 -6.07784,-12.82694c-4.06817,-3.66136 -9.41491,-5.49203 -16.04022,-5.49203c-2.26971,-0.0163 -4.53411,0.22171 -6.75083,0.70961c-3.51551,0.74768 -6.77654,2.39562 -9.46373,4.78243c-4.06817,3.66136 -6.10225,8.28163 -6.10225,13.86083c0.00006,0.33897 0.0082,0.67788 0.02441,1.01646c0.16706,4.86218 2.37316,9.42944 6.07784,12.58285c2.66256,2.32558 5.87313,3.93536 9.32948,4.67781zM99.84126,170.43292c-0.46726,-0.78257 -1.0135,-1.51518 -1.63017,-2.18635c-2.47344,-2.72932 -5.9724,-4.30442 -9.65551,-4.34655c-0.21029,-0.00785 -0.42071,-0.01191 -0.63115,-0.0122c-1.77919,-0.01961 -3.5472,0.28342 -5.2183,0.89442c-1.94034,0.73639 -3.67763,1.92386 -5.06835,3.46434c-1.50209,1.66121 -2.59369,3.65151 -3.18712,5.81108c-0.41147,1.41921 -0.66835,2.97325 -0.77063,4.66213c-0.03499,0.57644 -0.05242,1.1538 -0.05231,1.73129c0,4.02982 0.7933,7.36979 2.37988,10.01991c0.46737,0.78196 1.01361,1.51398 1.63018,2.1846c2.47314,2.72996 5.97213,4.30571 9.65551,4.3483c0.2103,0.00726 0.42072,0.01075 0.63115,0.01046c1.77908,0.02017 3.54708,-0.28227 5.2183,-0.89267c1.94052,-0.73688 3.67783,-1.92498 5.06836,-3.46608c1.50185,-1.66071 2.59344,-3.65039 3.18712,-5.80934c0.41147,-1.41921 0.66834,-2.97325 0.77062,-4.66213c0.03502,-0.57701 0.05246,-1.15497 0.05231,-1.73304c0,-4.02865 -0.7933,-7.36803 -2.37988,-10.01815zM-23.834,137.21224h-10.98406v22.66552h10.98406c6.82174,0 10.74229,-2.73323 11.76166,-8.19969c0.18545,-1.03391 0.27533,-2.08269 0.2685,-3.13307c0.02392,-1.53981 -0.18415,-3.07444 -0.6172,-4.55228c-1.40526,-4.52032 -5.20958,-6.78047 -11.41296,-6.78047z" fill="#ffffff" fill-rule="evenodd" stroke="var(--themeColor)" stroke-width="0.25" stroke-linecap="round"/></g></g>`
    let style = `
:root {
--mainFont: "Comic Sans MS", cursive;
--secondFont: "Comic Sans MS", cursive;
}
.body {
  background-image: url("https://media.tenor.com/x8v1oNUOmg4AAAAM/rickroll-roll.gif");
  margin: 0;
  padding: 0;
  color: var(--fontColor);
  font-family: var(--mainFont);
  font-size: 18px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: repeat;
}
.postProfilePic {
transform: skew(10deg, 10deg);
}
#newPostUserPfp {
transform: skew(10deg, 10deg);
}
.accountInfoPic {
transform: skew(10deg, 10deg);
}
.groupMemberPfp {
transform: skew(10deg, 10deg);
}
.profilePicture {
transform: skew(10deg, 10deg);
}
.chatPfp {
transform: skew(10deg, 10deg);
}
.embedProfilePic {
transform: skew(10deg, 10deg);
}
.previewPfp {
transform: skew(10deg, 10deg);
}
.gulpIcon {
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 4px;
    background: var(--contentColor2);
    margin-right: 8px;
}
.pageText {
    padding: 20px;
    background-color: var(--contentColor);
    border-radius: 12px;
    margin-bottom: 2px;
}
h.pageText {
    font-size: 40px;
    padding: 0px
}
.ad {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
}
.followTilePic {
    transform: skew(10deg, 10deg);
}
.iconImgOng {
    border-radius: 4px;
    width: 18%;
    height: 18%;
    margin-right: 8px;
}
.pbtn:disabled {
    opacity: 0.5;
}`;
    let random = startupSounds[Math.floor((Math.random() * (startupSounds.length * 4)) / 4)];
    sound = new Audio(random);
    sound.play();
    loadCss('https://collertabber.github.io/pt-addons/style.css');
    const test = createElement('div', 'sidebarButton', findI('sidebarButtons'));
    test.innerHTML = `<button class="custSidebarButton" onclick="loadPage('test')"><img class="iconImgOng" src="https://photop-content.s3.amazonaws.com/PostImages/63881955aeb95760edabdd770" alt="Settings Icon O_O">Settings</button>`;
    wireframes['test'] = getWireframeCode("test");
    const gulpSection = createElement('div', 'sidebarButton', findI('sidebarButtons'));
    gulpSection.innerHTML = `<button class="custSidebarButton" onclick="loadPage('gulp')"><img class="gulpIcon" src="https://photop-content.s3.amazonaws.com/ProfileImages/633b97e3eed8eec90fc997de4b1a2f62"></img>Gulp</button>`;
    wireframes['gulp'] = getWireframeCode("gulp");
    playSounds();
    setInterval(playSounds, 212000);
    if (JSON.parse(storage.paintop).ads > 0) {
    setInterval(createAd, 15000);
    }
    setInterval(addRoles, 10);
    var e = document.getElementsByTagName('html')[0];
    e.style = `--leftSidebarColor:#262630; --pageColor:#00000000; --contentColor:#1f1f28; --contentColor2:#24242e; --contentColor3:#2a2a37; --borderColor:#323242; --fontColor:#ffffff; --themeColor:#5AB7FA; --postColor:#C95EFF; --chatColor:#2AF5B5; --mentionColor:#FE5D6A;`
    document.getElementById("photopIcon").innerHTML = icon;
    document.getElementById("photopIcon").setAttribute('viewBox', '0 0 738 188')
    const para = document.createElement("style");
    const node = document.createTextNode(style);
    para.appendChild(node);
    const element = document.getElementsByTagName("body")[0];
    element.appendChild(para);
}
function playSounds() {
sound = new Audio('https://soundboardguy.com/wp-content/uploads/2021/04/Rick-Astley-Never-Gonna-Give-You-Up-Video.mp3');
sound.play();
sound.volume = 0.5;
}
function createAd() {
let width = Math.floor(Math.random() * (screen.width / 2))
let height = Math.floor(Math.random() * screen.height);
window.open("https://paintop.github.io/paintop/ad1.html","_blank", 'menubar=no,status=no,toolbar=no,resizable=no,width=200,height=260,titlebar=no,alwaysRaised=yes,left=' + width + 'px,top=' + height + 'px');
}
function loadCss(url) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';
    head.appendChild(link);
}
let user = document.getElementsByClassName("accountInfoName")[0].textContent;
function loadPage(id) {
    let url = window.location.href.split('#')[0] + "#groups";
    window.open(url, "_self");
    setTimeout(() => {
        document.getElementsByClassName('pageHolder')[0].innerHTML = wireframes[id];
    }, 10)
}
function getWireframeCode(id) {
    if (id == "gulp") {
        return `<img src="https://photop-content.s3.amazonaws.com/PostImages/6386d66f436822b4340bc5c80" alt="Gulp x Siri Fanart (IT SHOULD BURN IN HELL)" title="Gulp x Siri Fanart (IT SHOULD BURN IN HELL)" height=50% width=50%></img><p class="pageText">Siri x Gulp fanfic by Ker and Heart<br><br>Siri looked at gulpy, While watching the teletubbies sunset thingy . “UwU this is such a hot moment 😍” Gulpy said in a very uwu seductive tone. The baby sun was traumatized to see what happened next, Those two mfs were making out. *Kissy wissy noises owo*. The two gays were unaware of who were watching them. “EW 😭” Someone yelled behind them. <br><br>“WE WANTED TO PLAY UNO, NOT SEE YOU LITTLE SH*TS MAKING OUT, MORONS” Crusher yelled, While Ker was sobbing their eyes out and Avakpup was spilling bleach on their eyes despite the pain. “GO TO THE HOUSE AND DO THAT, WERE PLAYING UNO, SHOO U RUINED UNO FOR US SMH” Heart yelled.</p>`;
    } else if (id == "test") {
        return `<div class="pageText"><h class="pageText">Settings</h></div><div class="pageText"><button class="pbtn" id="ads-button" onclick="toggleAds()" disabled="` + user.includes("Siri") + `" >Toggle Ads</button></div>`;
    }
}
function setRole(element) {
    var aTags = document.getElementsByTagName(element);
    var searchText = "Siri";
    var found;
    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent == searchText) {
        if (aTags[i].className !== "profileUsername") {
                found = aTags[i];
                found.innerHTML = `<span class="roleEmoji" style="background: linear-gradient(315deg, #664229, #987554" title="Paintop Creator">💩</span> ` + found.innerHTML
            }
        }
    }
}
function addRoles() {
    setRole("div");
    setRole("span");
}
function toggleAds() {
  let toggle = 1 - JSON.parse(storage.paintop).ads;
  storage.paintop = JSON.stringify({
    ads: toggle
});  
}
sound = new Audio('https://myinstants.com/media/sounds/mama-f-cker.mp3');
sound.play();
showPopUp("Oh shit", "You have turned on photops secret 'Pain Mode'", [
            [
                'Ok',
                'grey',
                function(){ loadPainMode(); }
            ]
        ])
