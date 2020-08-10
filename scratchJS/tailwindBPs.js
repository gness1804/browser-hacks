// tailwind breakpoint monitor
// TODO: code is broken; need to fix

if (window.location.origin === 'http://localhost:3000') {
  // the breakpoints for Tailwind out of the box.
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1440,
  };
  let timeout;
  window.addEventListener('resize', () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      const currWidth = window.innerWidth;
      let currBreakpoint = 'default';
      for (const breakpoint in breakpoints) {
        if ({}.hasOwnProperty.call(breakpoints, breakpoint)) {
          const bpMinWidth = breakpoints[breakpoint];
          if (currWidth >= bpMinWidth) {
            currBreakpoint = breakpoint;
            break;
          }
        }
      }
      console.log('currBreakpoint:', currBreakpoint);
    }, 3000);
  });
}
