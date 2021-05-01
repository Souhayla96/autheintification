import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    jQuery(($) => {
      $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 200) {
        $('.navbar').addClass('fixed-top');
      } else if ($(this).scrollTop() == 0) {
        $('.navbar').removeClass('fixed-top');
      }
    });

    const adjustNav = () => {
      var winWidth = $(window).width(),
        dropdown = $('.dropdown'),
        dropdownMenu = $('.dropdown-menu');

      if (winWidth >= 768) {
        dropdown.on('mouseenter', () => {
          $(this).addClass('show')
            .children(dropdownMenu).addClass('show');
        });

        dropdown.on('mouseleave', () => {
          $(this).removeClass('show')
            .children(dropdownMenu).removeClass('show');
        });
      } else {
        dropdown.off('mouseenter mouseleave');
      }
    }

    $(window).on('resize', adjustNav);

    adjustNav();
  });
  }


}
function jQuery(arg0: ($: any) => void) {
  throw new Error('Function not implemented.');
}

