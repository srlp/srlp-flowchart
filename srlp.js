const liveInNewYork = '<h1>Are you a transgender, gender non-conforming, and/or intersex (TGNCI) person who lives in New York City or is incarcerated in New York State?</h1><div class="app__svg"><i class="fas fa-transgender-alt fa-5x"></i></div>';
const liveOutsideNewYork = 'If you live outside of New York City or are incarcerated outside of New York State...';
const scheduledAppointment = '<h1>Do you want a <b>scheduled</b> appointment?</h1><div class="app__button app__button--special"><div class="app__svg"><i class="far fa-calendar-check fa-5x"></i></div></div>';
const walkinHours = '<h1>Do you want to come during <b>walk-in</b> hours?</h1><div class="app__button app__button--special"><div class="app__svg"><i class="fas fa-walking fa-5x"></i></div></div>';
const difficultOrNotPossible = '<h1>Is coming to our office <b>difficult</b> or <b>not possible</b>?</h1><div class="app__button app__button--special"><div class="app__svg"><i class="fab fa-accessible-icon fa-5x"></i></div></div>';
const callUs = '<h1>Call us!</h1><div class="app__svg"><i class="fas fa-phone fa-5x"></i></div><p>Leave us a voicemail at (212) 337-8550 ext. 308.</p>';
const emailUs = 'Email us at info@srlp.org or use the online form below.';
const writeUs = 'Write us at <p>Sylvia Rivera Law Project</p><p>147 W 24th St, 5th Fl</p><p>New York, NY 10011</p>';
const getBackToYou = '<p>Someone will get back to you as soon as possible, keeping in mind the urgency of your legal need.</p><p>Please note our legal help line and legal email line is open all year long!';
const unableToUse = '<p>People unable to use the phone, email, or walk-in system can write us a letter.</p><p>If you are incarcerated and need to use the name of an attorney, you can add "Attn: Mik Kinkead, Esq."';

const yesNo = '<div class="app__buttons"><div class="app__button app__button--yes">Yes</div><div class="app__button app__button--no">No</div></div>'

const elementsToFade = 'h1, .app__svg, .app__buttons, .app__button--special';
const elementsToFadeSpecial = 'h1, .app__buttons, .app__button--special';

const replaceHtml = ($container, html, elements) => {
  $container.html(html);
  $container.find(elements).css({
    'opacity': 0,
    'position': 'relative',
    'left': '50px'
  })
  $container.find(elements).each((index, element) => {
    console.log(index, element);
    $(element).delay(index * 200).animate({
      'opacity': 1,
      'left': 0,
    }, 500);
  })
}

const replacePage = ($container, html, color, special) => {
  const fade = special ? elementsToFadeSpecial : elementsToFade;
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
    replaceHtml($('.app__text'), html, fade);
  });
}

$(document).ready(() => {
  const $app = $('#app');
  $app.css('display', 'flex');
  $app.html('<div class="app__container"><div class="app__text"></div></div>');
  const $container = $app.find('.app__container');
  replaceHtml($container.find('.app__text'), liveInNewYork + yesNo, elementsToFade);
  $('.app__button--yes').click(() => {
    replacePage($container, scheduledAppointment + walkinHours + difficultOrNotPossible, 'green', true);
  })
})