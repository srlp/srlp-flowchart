const selectLanguage = `
  <img class='fade' src='liberation.png' /> 
  <div class="app__buttons fade">
    <div class="app__button app__button--eng" onClick="handleEngClick()">English</div>
    <div class="app__button app__button--esp" onClick="handleEspClick()">Espa&ntilde;ol</div>
  </div>`;
const backArrow = `
  <div class="app__back" onClick="handleBack()">
    <i class="fas fa-arrow-left fa-2x"></i>
  </div>`;
let transgenderQuestion = `
  <h1 class="fade">Do you identify as a transgender, gender non-conforming, and/or intersex (TGNCI) person?</h1>
  <div class="app__svg fade">  
    <i class="fas fa-transgender-alt fa-5x"></i>
  </div>`;
let liveInNewYork = `
  <h1 class="fade">Do you live in New York City or are you incarcerated in New York State?</h1>
  <div class="app__svg fade">  
    <i class="far fa-map fa-5x"></i>
  </div>`;
let notTransgender = `
  <h1 class="fade">The best place to start looking for legal services if you are not TGNCI is your local legal aid office.</h1>
  <div class="app__svg fade">  
    <i class="fas fa-balance-scale fa-5x"></i>
  </div>
  <h1 class="fade">If you have access to the internet, search for legal aid in your city or county.</h1>
  <h1 class="fade">The legal aid organizations for New York City where Sylvia Rivera Law Project is based are Legal Services NYC at (917) 661-4500 and the Legal Aid Society at (212) 577-3300.</h1>`;  
let liveOutsideNewYork = `
  <h1 class="fade">We always want to provide support to TGNCI people of color and low-income TGNCI people across the world but we are NOT ABLE to provide legal services outside of New York State. That said, we may be able to point you towards legal and non-legal resources that may be helpful for you.</h1>`;
let scheduledAppointment = `
  <h1 class="fade">Do you want a <b>scheduled</b> appointment?</h1>
  <div class="app__button app__button--special app__button--schedule fade" onClick="handleScheduleClick()">
    <div class="app__svg">
      <i class="far fa-calendar-check fa-5x"></i>
    </div>
  </div>`;
let walkinHours = `
  <h1 class="fade">Do you want to come during <b>walk-in</b> hours?</h1>
  <div class="app__button app__button--special app__button--walk fade" onClick="handleWalkClick()">
    <div class="app__svg">
      <i class="fas fa-walking fa-5x"></i>
    </div>
  </div>`;
let difficultOrNotPossible = `
  <h1 class="fade">Is coming to our office <b>difficult</b> or <b>not possible</b>?</h1>
  <div class="app__button app__button--special app__button--difficult fade" onClick="handleDifficultClick()">
    <div class="app__svg">
      <i class="fab fa-accessible-icon fa-5x"></i>
    </div>
  </div>`;
let callUs = `
  <h1 class="fade">Call us!</h1>
  <div class="app__svg fade">
    <i class="fas fa-phone fa-5x"></i>
  </div>
  <h1 class="fade">Leave us a voicemail at (212) 337-8550 ext. 308.</h1>`;
let callUsAlt = `
  <h1 class="fade">Call us!</h1>
  <div class="app__button app__button--special app__button--schedule fade" onClick="handleCallClick()">
    <div class="app__svg">
      <i class="fas fa-phone fa-5x"></i>
    </div>
  </div>`;
let emailUs = `
  <h1 class="fade">Or email us at info@srlp.org or contact us <a href="https://srlp.org/about/contact/">here</a>.</h1>
  <div class="app__svg fade">
    <i class="fas fa-envelope-open fa-5x"></i>
  </div>`;
let emailUsAlt = `
  <h1 class="fade">Email us!</h1>
  <div class="app__button app__button--special app__button--schedule fade" onClick="handleEmailClick()">
    <div class="app__svg">
      <i class="far fa-envelope-open fa-5x"></i>
    </div>
  </div>`;
let writeUsAlt = `
  <h1 class="fade">Write us!</h1> 
  <div class="app__button app__button--special app__button--schedule fade" onClick="handleWriteClick()">
    <div class="app__svg">
      <i class="far fa-edit fa-5x"></i>
    </div>
  </div>`;  
let writeUs = `
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
let comeIn = `
  <h1 class="fade">Come to our walk-in clinic!</h1>
  <div class="app__svg fade">
    <i class="far fa-calendar-alt fa-5x"></i>
  </div>
  <h1 class="fade">We are open every Thursday 1:00-4:30 pm from May 25 through October.</h1>`;
let legalAdvocate = `
  <h1 class="fade">A legal advocate will see you on a first come, first served basis.</h1>
  <h1 class="fade">Please note that when there are many people, you will have to wait to speak to an SRLP advocate.</h1>`;  
let getBackToYou = `
  <h1 class="fade">Someone will get back to you as soon as possible, keeping in mind the urgency of your legal need.</h1>
  <h1 class="fade">Please note our legal help line and legal email line is open all year long!</h1>`;
let unableToUse = `
  <h1 class="fade">People unable to use the phone, email, or walk-in system can write us a letter.
  <h1 class="fade">If you are incarcerated and need to use the name of an attorney, you can add "Attn: Mik Kinkead, Esq."</h1>`;

let transgenderYesNo = `
  <div class="app__buttons fade">
    <div class="app__button app__button--yes" onClick="handleTransgenderClick()">Yes</div>
    <div class="app__button app__button--no" onClick="handleTransgenderNoClick()">No</div>
  </div>`;
let newYorkYesNo = `
  <div class="app__buttons fade">
    <div class="app__button app__button--yes" onClick="handleNewYorkClick()">Yes</div>
    <div class="app__button app__button--no" onClick="handleNewYorkNoClick()">No</div>
  </div>`;
let next = `
  <div class="app__buttons fade"><div class="app__button" onClick="handleNextClick()">Next</div></div>`;  

const replaceHtml = ($container, html) => {
  $container.html(html);
  $container.find('.fade').each((index, element) => {
    setTimeout(() => {
      $(element).addClass('fade--complete');
    }, 300*index)
  })
}

const replacePage = (html, klass, color) => {
  $('#app').find('.app__container').parent().append(`<div class="app__container--new ${klass}">${klass ? backArrow : ''}<div class="app__text"></div></div>`);
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
    $($('.app__container')[0]).remove();
    replaceHtml($('.app__text'), html);
  });
}

$(document).ready(() => {
  const $app = $('#app');
  $app.css('display', 'flex');
  $app.html('<div class="app__container"><div class="app__text"></div></div>');
  const $container = $app.find('.app__container');
  replaceHtml($container.find('.app__text'), selectLanguage);
})

const handleEngClick = () => {
  transgenderQuestion = `
    <h1 class="fade">Do you identify as a transgender, gender non-conforming, and/or intersex (TGNCI) person?</h1>
    <div class="app__svg fade">  
      <i class="fas fa-transgender-alt fa-5x"></i>
    </div>`;
  liveInNewYork = `
    <h1 class="fade">Do you live in New York City or are you incarcerated in New York State?</h1>
    <div class="app__svg fade">  
      <i class="far fa-map fa-5x"></i>
    </div>`;
  notTransgender = `
    <h1 class="fade">The best place to start looking for legal services if you are not TGNCI is your local legal aid office.</h1>
    <div class="app__svg fade">  
      <i class="fas fa-balance-scale fa-5x"></i>
    </div>
    <h1 class="fade">If you have access to the internet, search for legal aid in your city or county.</h1>
    <h1 class="fade">The legal aid organizations for New York City where Sylvia Rivera Law Project is based are Legal Services NYC at (917) 661-4500 and the Legal Aid Society at (212) 577-3300.</h1>`;  
  liveOutsideNewYork = `
    <h1 class="fade">We always want to provide support to TGNCI people of color and low-income TGNCI people across the world but we are NOT ABLE to provide legal services outside of New York State. That said, we may be able to point you towards legal and non-legal resources that may be helpful for you.</h1>`;
  scheduledAppointment = `
    <h1 class="fade">Do you want a <b>scheduled</b> appointment?</h1>
    <div class="app__button app__button--special app__button--schedule fade" onClick="handleScheduleClick()">
      <div class="app__svg">
        <i class="far fa-calendar-check fa-5x"></i>
      </div>
    </div>`;
  walkinHours = `
    <h1 class="fade">Do you want to come during <b>walk-in</b> hours?</h1>
    <div class="app__button app__button--special app__button--walk fade" onClick="handleWalkClick()">
      <div class="app__svg">
        <i class="fas fa-walking fa-5x"></i>
      </div>
    </div>`;
  difficultOrNotPossible = `
    <h1 class="fade">Is coming to our office <b>difficult</b> or <b>not possible</b>?</h1>
    <div class="app__button app__button--special app__button--difficult fade" onClick="handleDifficultClick()">
      <div class="app__svg">
        <i class="fab fa-accessible-icon fa-5x"></i>
      </div>
    </div>`;
  callUs = `
    <h1 class="fade">Call us!</h1>
    <div class="app__svg fade">
      <i class="fas fa-phone fa-5x"></i>
    </div>
    <h1 class="fade">Leave us a voicemail at (212) 337-8550 ext. 308.</h1>`;
  callUsAlt = `
    <h1 class="fade">Call us!</h1>
    <div class="app__button app__button--special app__button--schedule fade" onClick="handleCallClick()">
      <div class="app__svg">
        <i class="fas fa-phone fa-5x"></i>
      </div>
    </div>`;
  emailUs = `
    <h1 class="fade">Or email us at info@srlp.org or contact us <a href="https://srlp.org/about/contact/">here</a>.</h1>
    <div class="app__svg fade">
      <i class="fas fa-envelope-open fa-5x"></i>
    </div>`;
  emailUsAlt = `
    <h1 class="fade">Email us!</h1>
    <div class="app__button app__button--special app__button--schedule fade" onClick="handleEmailClick()">
      <div class="app__svg">
        <i class="far fa-envelope-open fa-5x"></i>
      </div>
    </div>`;
  writeUsAlt = `
    <h1 class="fade">Write us!</h1> 
    <div class="app__button app__button--special app__button--schedule fade" onClick="handleWriteClick()">
      <div class="app__svg">
        <i class="far fa-edit fa-5x"></i>
      </div>
    </div>`;  
  writeUs = `
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
  comeIn = `
    <h1 class="fade">Come to our walk-in clinic!</h1>
    <div class="app__svg fade">
      <i class="far fa-calendar-alt fa-5x"></i>
    </div>
    <h1 class="fade">We are open every Thursday 1:00-4:30 pm from May 25 through October.</h1>`;
  legalAdvocate = `
    <h1 class="fade">A legal advocate will see you on a first come, first served basis.</h1>
    <h1 class="fade">Please note that when there are many people, you will have to wait to speak to an SRLP advocate.</h1>`;  
  getBackToYou = `
    <h1 class="fade">Someone will get back to you as soon as possible, keeping in mind the urgency of your legal need.</h1>
    <h1 class="fade">Please note our legal help line and legal email line is open all year long!</h1>`;
  unableToUse = `
    <h1 class="fade">People unable to use the phone, email, or walk-in system can write us a letter.
    <h1 class="fade">If you are incarcerated and need to use the name of an attorney, you can add "Attn: Mik Kinkead, Esq."</h1>`;
  let transgenderYesNo = `
    <div class="app__buttons fade">
      <div class="app__button app__button--yes" onClick="handleTransgenderClick()">Yes</div>
      <div class="app__button app__button--no" onClick="handleTransgenderNoClick()">No</div>
    </div>`;
  newYorkYesNo = `
    <div class="app__buttons fade">
      <div class="app__button app__button--yes" onClick="handleNewYorkClick()">Yes</div>
      <div class="app__button app__button--no" onClick="handleNewYorkNoClick()">No</div>
    </div>`;
  next = `
    <div class="app__buttons fade"><div class="app__button" onClick="handleNextClick()">Next</div></div>`; 
  replacePage(transgenderQuestion + transgenderYesNo, 'transgender', '#007ac7');
}

const handleEspClick = () => {
  transgenderQuestion =`
    <h1 class="fade">Se identifica como una persona transg&eacute;nero, g&eacute;nero no conforme, y/o intersexo (TGNCI)?</h1>
    <div class="app__svg fade">  
      <i class="fas fa-transgender-alt fa-5x"></i>
    </div>`;
  liveInNewYork = `
    <h1 class="fade">&iquest;Vive en la Ciudad de Nueva York o est&aacute; encarceladx en el Estado de Nueva York?</h1>
    <div class="app__svg fade">  
      <i class="far fa-map fa-5x"></i>
    </div>`;
  notTransgender = `
    <h1 class="fade">El mejor lugar para comenzar a buscar servicios legales si no es TGNCI es su oficina local de "legal aid" (ayuda legal gratuita).</h1>
    <div class="app__svg fade">  
      <i class="fas fa-balance-scale fa-5x"></i>
    </div>
    <h1 class="fade">Si tiene acceso a Internet, busque "legal aid" en su ciudad o condado.</h1>
    <h1 class="fade">Las organizaciones de ayuda legal gratuita en la ciudad de Nueva York donde se basa Sylvia Rivera Law Project son Legal Services NYC a (917) 661-4500 y Legal Aid Society a (212) 577-3300.</h1>`;  
  liveOutsideNewYork = `
    <h1 class="fade">Siempre queremos brindar apoyo a las personas TGNCI de color y a las personas TGNCI de bajos ingresos en todo el mundo, pero NO podemos proporcionar servicios legales fuera del Estado de Nueva York. Dicho esto, podr&iacute;amos indicarle recursos legales y no legales que pueden ser &uacute;tiles para usted.</h1>`;
  scheduledAppointment = `
    <h1 class="fade">&iquest;Quiere una cita programada?</h1>
    <div class="app__button app__button--special app__button--schedule fade" onClick="handleScheduleClick()">
      <div class="app__svg">
        <i class="far fa-calendar-check fa-5x"></i>
      </div>
    </div>`;
  walkinHours = `
    <h1 class="fade">&iquest;Prefiere venir aqu&iacute; durante nuestra cl&iacute;nica legal sin una cita?</h1>
    <div class="app__button app__button--special app__button--walk fade" onClick="handleWalkClick()">
      <div class="app__svg">
        <i class="fas fa-walking fa-5x"></i>
      </div>
    </div>`;
  difficultOrNotPossible = `
    <h1 class="fade">&iquest;Es dif&iacute;cil o imposible llegar a nuestra oficina?</h1>
    <div class="app__button app__button--special app__button--difficult fade" onClick="handleDifficultClick()">
      <div class="app__svg">
        <i class="fab fa-accessible-icon fa-5x"></i>
      </div>
    </div>`;
  callUs = `
    <h1 class="fade">&iexcl;Ll&aacute;menos!</h1>
    <div class="app__svg fade">
      <i class="fas fa-phone fa-5x"></i>
    </div>
    <h1 class="fade">D&eacute;jenos un correo de voz a (212) 337-8550 extensi&oacute;n 308.</h1>`;
  callUsAlt = `
    <h1 class="fade">&iexcl;Ll&aacute;menos!</h1>
    <div class="app__button app__button--special app__button--schedule fade" onClick="handleCallClick()">
      <div class="app__svg">
        <i class="fas fa-phone fa-5x"></i>
      </div>
    </div>`;
  emailUs = `
    <h1 class="fade">O env&iacute;enos un correo electr&oacute;nico a info@srlp.org o cont&aacute;ctenos <a href="https://srlp.org/about/contact/">aqu&iacute;</a>.</h1>
    <div class="app__svg fade">
      <i class="fas fa-envelope-open fa-5x"></i>
    </div>`;
  emailUsAlt = `
    <h1 class="fade">&iexcl;Env&iacute;enos un correo electr&oacute;nico!</h1>
    <div class="app__button app__button--special app__button--schedule fade" onClick="handleEmailClick()">
      <div class="app__svg">
        <i class="far fa-envelope-open fa-5x"></i>
      </div>
    </div>`;
  writeUsAlt = `
    <h1 class="fade">&iexcl;Escr&iacute;benos!</h1> 
    <div class="app__button app__button--special app__button--schedule fade" onClick="handleWriteClick()">
      <div class="app__svg">
        <i class="far fa-edit fa-5x"></i>
      </div>
    </div>`;  
  writeUs = `
    <h1 class="fade">&iexcl;Escr&iacute;benos!</h1> 
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
  comeIn = `
    <h1 class="fade">&iexcl;Venga a nuestras cl&iacute;n&iacute;cas legales!</h1>
    <div class="app__svg fade">
      <i class="far fa-calendar-alt fa-5x"></i>
    </div>
    <h1 class="fade">Estamos abiertos todos los jueves de 1:00 - 4:30 pm de 25 de mayo a octubre.</h1>`;
  legalAdvocate = `
    <h1 class="fade">Un defensor legal lx ver&aacute; por orden de llegada.</h1>
    <h1 class="fade">Por favor tenga en cuenta que cuando hay muchas personas, tendr&aacute; que esperar para hablar con un defensor de SRLP.</h1>`;  
  getBackToYou = `
    <h1 class="fade">Alguien se comunicar&aacute; con usted lo antes posible, teniendo en cuenta la urgencia de su necesidad legal.</h1>
    <h1 class="fade">&iexcl;Por favor note nuestra l&iacute;nea del tel&eacute;fono y correo electr&oacute;nico de ayuda legal est&aacute; abiertos todo el a&ntilde;o!</h1>`;
  unableToUse = `
    <h1 class="fade">Las personas que no puedan usar el tel&eacute;fono o el correo electr&oacute;nico o venir a nuestras cl&iacute;nicas legales pueden escribirnos una carta.
    <h1 class="fade">Si est&aacute; encarceladx y necesita usar el nombre de un abogadx, puede agregar a su carta "Attn: Mik Kinkead, Esq."</h1>`;

  transgenderYesNo = `
    <div class="app__buttons fade">
      <div class="app__button app__button--yes" onClick="handleTransgenderClick()">S&iacute;</div>
      <div class="app__button app__button--no" onClick="handleTransgenderNoClick()">No</div>
    </div>`;
  newYorkYesNo = `
    <div class="app__buttons fade">
      <div class="app__button app__button--yes" onClick="handleNewYorkClick()">S&iacute;</div>
      <div class="app__button app__button--no" onClick="handleNewYorkNoClick()">No</div>
    </div>`;
  next = `
    <div class="app__buttons fade"><div class="app__button" onClick="handleNextClick()">Pr&oacute;xima</div></div>`;  

  replacePage(transgenderQuestion + transgenderYesNo, 'transgender', '#007ac7');
}

const handleNewYorkClick = () => {
  replacePage(scheduledAppointment + walkinHours + difficultOrNotPossible, 'come-in', '#26A65B');
}

const handleNewYorkNoClick = () => {
  replacePage(liveOutsideNewYork + next, 'outside-ny', '#d64541');
}

const handleTransgenderClick = () => {
  replacePage(liveInNewYork + newYorkYesNo, 'live-in-new-york', '#f9690e')
}

const handleTransgenderNoClick = () => {
  replacePage(notTransgender, 'not-transgender', '#d64541');
}

const handleNextClick = () => {
  replacePage(callUsAlt + emailUsAlt + writeUsAlt, 'alt', '#26a65b')
}

const handleScheduleClick = () => {
  replacePage(callUs + emailUs + getBackToYou, 'schedule', '#913D88');
}

const handleWalkClick = () => {
  replacePage(comeIn + legalAdvocate, 'walk-in', '#913D88');
}

const handleDifficultClick = () => {
  replacePage(writeUs + unableToUse, 'difficult', '#913D88');
}

const handleCallClick = () => {
  replacePage(callUs + getBackToYou, 'call', '#913D88');
}

const handleEmailClick = () => {
  replacePage(emailUs + getBackToYou, 'email', '#913D88');
}

const handleWriteClick = () => {
  replacePage(writeUs + unableToUse, 'write', '#913D88');
}

const handleBack = () => {
  if ($('.transgender').length) {
    replacePage(selectLanguage, '', '#913D88');
  } else if ($('.live-in-new-york').length || $('.not-transgender').length) {
    replacePage(transgenderQuestion + transgenderYesNo, 'transgender', '#007ac7');
  } else if ($('.come-in').length) {
    replacePage(liveInNewYork + newYorkYesNo, 'live-in-new-york', '#f9690e');
  } else if ($('.schedule').length || $('.walk-in').length || $('.difficult').length) {
    replacePage(scheduledAppointment + walkinHours + difficultOrNotPossible, 'come-in', '#36a65b');
  } else if ($('.outside-ny').length) {
    replacePage(liveInNewYork + newYorkYesNo, 'live-in-new-york', '#f9690e');
  } else if ($('.alt').length) {
    replacePage(liveOutsideNewYork + next, 'outside-ny', '#d64541');
  } else if ($('.call').length || $('.write').length || $('.email').length) {
    replacePage(callUsAlt + emailUsAlt + writeUsAlt, 'alt', '#26a65b');
  }
}