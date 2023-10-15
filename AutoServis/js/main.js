let headerPage=document.querySelector('.servWrap');
window.addEventListener('scroll', ()=> {
    let offset=window.pageYOffset;
    headerPage.style.backgroundPositionY=offset*0.7+'px'
});


let headerBloc=document.querySelector('.topBloc'),
headerLink=document.querySelector('.linkBloc'),
headerlogoWrap=document.querySelector('.site-logo'),
listContact=document.querySelector('.list-contact');
window.addEventListener('scroll', ()=> {
    if(window.pageYOffset>0) {
        headerBloc.classList.add('in-bg');
        headerLink.classList.add('in-view');
        headerlogoWrap.classList.add('margin-ziro');
        listContact.classList.add('inDrup')
    }
    else {
        headerBloc.classList.remove('in-bg');
        headerLink.classList.remove('in-view');
        headerlogoWrap.classList.remove('margin-ziro');
        listContact.classList.remove('inDrup');
        listContact.style.transition='all 0.5s ease';
        headerBloc.style.transition='all 0.5s ease';
        headerLink.style.transition='all 0.5s ease';
        headerlogoWrap.style.transition='all 0.5s ease'
    }
}

);
const menuToggle=document.querySelector('#menu-togle');
const mibileNavConteiner=document.querySelector('#mobile-nav1');
menuToggle.onclick=function() {
    menuToggle.classList.toggle('menu_icon_active');
    mibileNavConteiner.classList.toggle('mobile-nav-sctiv')
}

window.addEventListener('scroll', ()=> {
    if(mibileNavConteiner.classList.contains('mobile-nav-sctiv')) {
        mibileNavConteiner.classList.remove('mobile-nav-sctiv');
        menuToggle.classList.remove('menu_icon_active')
    }
}

);
const slidingMedium_0=document.querySelector('.draftService');
window.addEventListener('scroll', ()=> {
    const {
        scrollTop, clientHeight
    }
    =document.documentElement;
    const topElementToTopViewport=slidingMedium_0.getBoundingClientRect().top;
    if(scrollTop>(scrollTop+topElementToTopViewport).toFixed()-clientHeight*0.9) {
        slidingMedium_0.classList.add('activeServ')
    }
}

);
const transMission=document.querySelector('.in-veiwe');
window.addEventListener('scroll', ()=> {
    const {
        scrollTop, clientHeight
    }
    =document.documentElement;
    const topElementToTopViewport=transMission.getBoundingClientRect().top;
    if(scrollTop>(scrollTop+topElementToTopViewport).toFixed()-clientHeight*0.9) {
        transMission.classList.add('activeTrans')
    }
});


const slidingMedium = document.querySelector('.tintMedium');
const slidingDark = document.querySelector('.tintDark');
window.addEventListener('scroll', ()=> {
    const {scrollTop, clientHeight } = document.documentElement;

    const topElementToTopViewport=slidingMedium.getBoundingClientRect().top;

    if(scrollTop>(scrollTop+topElementToTopViewport).toFixed()-clientHeight*0.5) {
        slidingMedium.classList.add('active'); 
        slidingDark.classList.add('active');
    }
});

const suspEnsion=document.querySelector('.magnit');
window.addEventListener('scroll', ()=> {
    const { scrollTop, clientHeight } = document.documentElement;

    const topElementToTopViewport=suspEnsion.getBoundingClientRect().top;

    if(scrollTop>(scrollTop+topElementToTopViewport).toFixed()-clientHeight*0.9) {
        suspEnsion.classList.add('activeSus')
    }
}

);
// Start btn-up

const btnUp = {
  el: document.querySelector('.btn-up'),
  scrolling: false,
  show() {
    if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.remove('btn-up_hide');
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  hide() {
    if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.add('btn-up_hide');
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  addEventListener() {
    // при прокрутке окна (window)
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;
      // если пользователь прокрутил страницу более чем на 200px
      if (scrollY > 400) {
        // сделаем кнопку .btn-up видимой
        this.show();
      } else {
        // иначе скроем кнопку .btn-up
        this.hide();
      }
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      this.scrolling = true;
      this.hide();
      // переместиться в верхнюю часть страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

//Finish btn-up