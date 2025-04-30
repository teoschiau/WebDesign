$(function () {
    var desktops = ['#desktop1', '#desktop2', '#desktop3', '#desktop4'];
    var current = 0;
    var isAnimating = false;
  
    $(document).on('click', function () {
      if (isAnimating) return;
      isAnimating = true;
  
      var currentDesktop = $(desktops[current]);
      var next = (current + 1) % desktops.length;
      var nextDesktop = $(desktops[next]);
  
      nextDesktop.css({ top: '-100%', display: 'flex' });
  
      currentDesktop.animate({ top: '100%' }, 800, function () {
        $(this).css({ display: 'none', top: 0 });
      });
  
      nextDesktop.animate({ top: '0%' }, 800, function () {
        current = next;
        isAnimating = false;
      });
    });
  });
  