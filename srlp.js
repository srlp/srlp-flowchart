const liveInNewYork = `
  <h1 class="fade">Are you a transgender, gender non-conforming, and/or intersex (TGNCI) person who lives in New York City or is incarcerated in New York State?</h1>
  <div class="app__svg fade">
    <i class="fas fa-transgender-alt fa-5x"></i>
  </div>`;
const liveOutsideNewYork = `
  <h1 class="fade">If you live outside of New York City or are incarcerated outside of New York State...</h1>`;
const scheduledAppointment = `
  <h1 class="fade">Do you want a <b>scheduled</b> appointment?</h1>
  <div class="app__button app__button--special app__button--schedule fade" onClick="handleScheduleClick()">
    <div class="app__svg">
      <i class="far fa-calendar-check fa-5x"></i>
    </div>
  </div>`;
const walkinHours = `
  <h1 class="fade">Do you want to come during <b>walk-in</b> hours?</h1>
  <div class="app__button app__button--special app__button--walk fade" onClick="handleWalkClick()">
    <div class="app__svg">
      <i class="fas fa-walking fa-5x"></i>
    </div>
  </div>`;
const difficultOrNotPossible = `
  <h1 class="fade">Is coming to our office <b>difficult</b> or <b>not possible</b>?</h1>
  <div class="app__button app__button--special app__button--difficult fade" onClick="handleDifficultClick()">
    <div class="app__svg">
      <i class="fab fa-accessible-icon fa-5x"></i>
    </div>
  </div>`;
const callUs = `
  <h1 class="fade">Call us!</h1>
  <div class="app__svg fade">
    <i class="fas fa-phone fa-5x"></i>
  </div>
  <h1 class="fade">Leave us a voicemail at (212) 337-8550 ext. 308.</h1>`;
const emailUs = `
  <h1 class="fade">Email us at info@srlp.org or use the online form below.</h1>
  <div class="app__svg fade">
    <i class="fas fa-envelope-open fa-5x"></i>
  </div>`;
const writeUs = `
  <h1 class="fade">Write us!</h1> 
  <div class="app__svg fade">
    <i class="fas fa-pencil-alt fa-5x"></i>
  </div>
  <h1>
    <p class="fade">
      Sylvia Rivera Law Project
    </p>
    <p class="fade">
      147 W 24th St, 5th Fl
    </p>
    <p class="fade">
      New York, NY 10011
    </p>
  <h1>`;
const comeIn = `
  <h1 class="fade">Come to our walk-in clinic!</h1>
  <div class="app__svg fade">
    <i class="far fa-calendar-alt fa-5x"></i>
  </div>
  <h1 class="fade">We are open every Thursday 1:00-4:30 pm from May 25 through October.</h1>`;
const legalAdvocate = `
  <h1 class="fade">A legal advocate will see you on a first come, first served basis.</h1>
  <h1 class="fade">Please note that when there are many people, you will have to wait to speak to an SRLP advocate.</h1>`;  
const getBackToYou = `
  <h1 class="fade">Someone will get back to you as soon as possible, keeping in mind the urgency of your legal need.</h1>
  <h1 class="fade">Please note our legal help line and legal email line is open all year long!</h1>`;
const unableToUse = `
  <h1 class="fade">People unable to use the phone, email, or walk-in system can write us a letter.
  <h1 class="fade">If you are incarcerated and need to use the name of an attorney, you can add "Attn: Mik Kinkead, Esq."</h1>`;

const yesNo = `
  <div class="app__buttons fade">
    <div class="app__button app__button--yes" onClick="handleYesClick()">Yes</div>
    <div class="app__button app__button--no onClick="handleNoClick()">No</div>
  </div>`

const replaceHtml = ($container, html) => {
  $container.html(html);
  $container.find('.fade').each((index, element) => {
    setTimeout(() => {
      $(element).addClass('fade--complete');
    }, 300*index)
  })
}

const replacePage = ($container, html, color) => {
  $container.parent().append('<div class="app__container--new"><div class="app__text"></div></div>');
  $('.app__container--new').css({
    'position': 'absolute',
    'z-index': 99,
    'left': '100%',
    'top': 0,
    background: color,
  })
  $('.app__container--new').animate({
    'left': 0,
  }, 500, () => {
    $('.app__container--new').addClass('app__container').removeClass('app__container--new');
    $('.app__text').css({
      'margin': 'auto',
    });
    $('.app__container:first-child').remove();
    replaceHtml($('.app__text'), html);
  });
}

$(document).ready(() => {
  const $app = $('#app');
  $app.css('display', 'flex');
  $app.html('<div class="app__container"><div class="app__text"></div></div>');
  const $container = $app.find('.app__container');
  replaceHtml($container.find('.app__text'), liveInNewYork + yesNo);
})

const handleYesClick = () => {
  replacePage($('#app').find('.app__container'), scheduledAppointment + walkinHours + difficultOrNotPossible, '#26A65B');
}

const handleScheduleClick = () => {
  replacePage($('#app').find('.app__container'), callUs + emailUs + getBackToYou, '#913D88');
}

const handleWalkClick = () => {
  replacePage($('#app').find('.app__container'), comeIn + legalAdvocate, '#913D88');
}

const handleDifficultClick = () => {
  replacePage($('#app').find('.app__container'), writeUs + unableToUse, '#913D88');
}