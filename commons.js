(function(){

  const dateFormat = 'YYYY-MM-DD';

  const thisWeek = [
    moment().day(1).format(dateFormat),
    moment().day(7).format(dateFormat),
  ];

  const previousWeek = [
    moment().day(-6).format(dateFormat),
    moment().day(0).format(dateFormat),
  ]

  
  window.commons = {
    thisWeek,
    previousWeek,
  }

})()
