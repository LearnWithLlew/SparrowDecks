

// XXX: Temporary stupid template processor, to be replaced with
// something way better and smarter.

export function processTemplate(template, obj) {

  let s = template || '';

  Object.keys(obj).forEach(function (key) {
    let value = obj[key];
    s = s.replace(
      new RegExp('{{\\s*' + key + '\\s*}}', 'g'),
      value
    );
  });

  return s;
}
