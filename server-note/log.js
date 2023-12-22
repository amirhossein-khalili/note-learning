// const colors = require('./colors');
// let lastMiddleware = '';
// const logMiddleware = (name) => {
//   if (process.env.log == 'show') {
//     console.log(colors.green(String.fromCodePoint(0x2714)), name);
//     lastMiddleware = name;
//     return;
//   }
// };

// const errorLog = (error) => {
//   // console.log(error);
//   if (process.env.log == 'show') {
//     if (error.stack) {
//       const lines = error.stack.split('\n');
//       const firstLineWithAt = lines.find((line) => line.trim().startsWith('at')).trim();
//       console.log(colors.warning('__________________________________________\n'));
//       console.log('error:', colors.error(error.message));
//       console.log('File:', colors.blue(firstLineWithAt));
//       if (lastMiddleware) console.log('Last Middleware:', colors.green(lastMiddleware));
//       console.log(error);
//       console.log(colors.warning('__________________________________________\n'));
//     } else {
//       console.log(colors.error(error.message));
//     }
//     return;
//   } else return;
// };

// module.exports = { logMiddleware, errorLog };
