/**
 * Presents the text as individual characters vertically. Use the TRANSPOSE formula to present them horizontally.
 * @param {A2:B26} text Text to be processed
 * @return separated characters
 * @customfunction
 */
function TEXT2CHARACTER(text) {
  return text.toString().split('');
}

/**
 * Write the string backwards
 *
 * @param {A2:B26} textrange Text to be rearranged
 * @return The reversed presentation of the text
 * @customfunction
 */
function TEXT2REVERSE(textrange) {
  textrange = textrange.map ? textrange : [[textrange]];
  return textrange.map(function(row) {
    return row.map(function(cell) {
      return cell.length > 0
        ? cell
            .split('')
            .reverse()
            .join('')
        : null;
    });
  });
}

function TRANSLITERATE(wordrange, language) {
  wordrange = wordrange.map ? wordrange : [[wordrange]];

  var transliterate = {};
  switch (language.toLowerCase()) {
    case 'russian':
      // https://www.loc.gov/catdir/cpso/romanization/russian.pdf
      transliterate = {
        А: 'A',
        Б: 'B',
        В: 'V',
        Г: 'G',
        Д: 'D',
        Е: 'E',
        Ё: 'Ë',
        Ж: 'Zh',
        З: 'Z',
        И: 'I',
        І: 'Ī',
        Й: 'Ĭ',
        К: 'K',
        Л: 'L',
        М: 'M',
        Н: 'N',
        О: 'O',
        П: 'P',
        Р: 'R',
        С: 'S',
        Т: 'T',
        У: 'U',
        Ф: 'F',
        Х: 'Kh',
        Ц: 'Ts',
        Ч: 'Ch',
        Ш: 'Sh',
        Щ: 'Shch',
        Ъ: 'ʺ',
        Ы: 'Y',
        Ь: 'ʹ',
        Ѣ: 'ie',
        Э: 'Ė',
        Ю: 'IU',
        Я: 'IA',
        Ѳ: 'Ḟ',
        Ѵ: 'Ẏ',
        а: 'a',
        б: 'b',
        в: 'v',
        г: 'g',
        д: 'd',
        е: 'e',
        ё: 'ë',
        ж: 'zh',
        з: 'z',
        и: 'i',
        і: 'ī',
        й: 'ĭ',
        к: 'k',
        л: 'l',
        м: 'm',
        н: 'n',
        о: 'o',
        п: 'p',
        р: 'r',
        с: 's',
        т: 't',
        у: 'u',
        ф: 'f',
        х: 'kh',
        ц: 'ts',
        ч: 'ch',
        ш: 'sh',
        щ: 'shch',
        ъ: 'ʺ',
        ы: 'y',
        ь: 'ʹ',
        ѣ: 'ie',
        э: 'ė',
        ю: 'iu',
        я: 'ia',
        ѳ: 'ḟ',
        ѵ: 'ẏ'
      };
      break;
    case 'belarusian':
      // http://www.loc.gov/catdir/cpso/romanization/belarusian.pdf
      transliterate = {
        А: 'A',
        Б: 'B',
        В: 'V',
        Г: 'H',
        Ґ: 'G',
        Д: 'D',
        Е: 'E',
        Ё: 'Io',
        Ж: 'Zh',
        З: 'Z',
        И: 'Ī',
        Ї: 'Ï',
        І: 'I',
        Й: 'Ĭ',
        К: 'K',
        Л: 'L',
        М: 'M',
        Н: 'N',
        О: 'O',
        П: 'P',
        Р: 'R',
        С: 'S',
        Т: 'T',
        У: 'U',
        Ў: 'Ŭ',
        Ф: 'F',
        Х: 'Kh',
        Ц: 'Ts',
        Ч: 'Ch',
        Ш: 'Sh',
        Щ: 'Shch',
        Ъ: 'ʺ',
        Ы: 'Y',
        Ь: 'ʹ',
        Ѣ: 'Ě',
        Э: 'Ė',
        Ю: 'IU',
        Я: 'IA',
        а: 'a',
        б: 'b',
        в: 'v',
        г: 'h',
        ґ: 'g',
        д: 'd',
        е: 'e',
        ё: 'io',
        ж: 'zh',
        з: 'z',
        и: 'ī',
        ї: 'ï',
        і: 'i',
        й: 'ĭ',
        к: 'k',
        л: 'l',
        м: 'm',
        н: 'n',
        о: 'o',
        п: 'p',
        р: 'r',
        с: 's',
        т: 't',
        у: 'u',
        ў: 'ŭ',
        ф: 'f',
        х: 'kh',
        ц: 'ts',
        ч: 'ch',
        ш: 'sh',
        щ: 'shch',
        ъ: 'ʺ',
        ы: 'y',
        ь: 'ʹ',
        ѣ: 'ě',
        э: 'ė',
        ю: 'iu',
        я: 'ia'
      };
      break;
    case 'ukrainian':
      // http://www.loc.gov/catdir/cpso/romanization/ukrainia.pdf
      transliterate = {
        А: 'A',
        Б: 'B',
        В: 'V',
        Г: 'H',
        Ґ: 'G',
        Д: 'D',
        Е: 'E',
        Є: 'Ie',
        Ж: 'Zh',
        З: 'Z',
        И: 'Y',
        І: 'I',
        Ї: 'Ï',
        Й: 'Ĭ',
        К: 'K',
        Л: 'L',
        М: 'M',
        Н: 'N',
        О: 'O',
        П: 'P',
        Р: 'R',
        С: 'S',
        Т: 'T',
        У: 'U',
        Ф: 'F',
        Х: 'Kh',
        Ц: 'ц',
        Ч: 'Ch',
        Ш: 'Sh',
        Щ: 'Shch',
        Ь: 'ʹ',
        Ю: 'IU',
        Я: 'IA',
        а: 'a',
        б: 'b',
        в: 'v',
        г: 'h',
        ґ: 'g',
        д: 'd',
        е: 'e',
        є: 'ie',
        ж: 'zh',
        з: 'z',
        и: 'y',
        і: 'i',
        ї: 'ï',
        й: 'ĭ',
        к: 'k',
        л: 'l',
        м: 'm',
        н: 'n',
        о: 'o',
        п: 'p',
        р: 'r',
        с: 's',
        т: 't',
        у: 'u',
        ф: 'f',
        х: 'kh',
        '': '',
        ч: 'ch',
        ш: 'sh',
        щ: 'shch',
        ь: 'ʹ',
        ю: 'iu',
        я: 'ia',
        ъ: 'ʺ',
        ы: 'y',
        ѣ: 'ě',
        э: 'ė'
      };
      break;
    case 'bulgarian':
      // http://www.loc.gov/catdir/cpso/romanization/bulgarian.pdf
      transliterate = {
        А: 'A',
        Б: 'B',
        В: 'V',
        Г: 'G',
        Д: 'D',
        Е: 'E',
        Ж: 'Zh',
        З: 'Z',
        И: 'I',
        Й: 'Ĭ',
        К: 'K',
        Л: 'L',
        М: 'M',
        Н: 'N',
        О: 'O',
        П: 'P',
        Р: 'R',
        С: 'S',
        Т: 'T',
        У: 'U',
        Ф: 'F',
        Х: 'Kh',
        Ц: 'Ts',
        Ч: 'Ch',
        Ш: 'Sh',
        Щ: 'Sht',
        Ъ: 'Ŭ',
        Ь: 'ʹ',
        Ѣ: 'Ie',
        Ю: 'IU',
        Я: 'IA',
        а: 'a',
        б: 'b',
        в: 'v',
        г: 'g',
        д: 'd',
        е: 'e',
        ж: 'zh',
        з: 'z',
        и: 'i',
        й: 'ĭ',
        к: 'k',
        л: 'l',
        м: 'm',
        н: 'n',
        о: 'o',
        п: 'p',
        р: 'r',
        с: 's',
        т: 't',
        у: 'u',
        ф: 'f',
        х: 'kh',
        ц: 'ts',
        ч: 'ch',
        ш: 'sh',
        щ: 'sht',
        ъ: 'ŭ',
        ь: 'ʹ',
        ѣ: 'ie',
        '': '',
        ю: 'iu',
        я: 'ia'
      };
      break;
    case 'Gregorian':
      // http://www.loc.gov/catdir/cpso/romanization/Gregorian.pdf
      transliterate = {Ⴀ:'A',Ⴁ:'B',Ⴂ:'G',Ⴃ:'D',Ⴄ:'E',Ⴅ:'V',Ⴆ:'Z',Ⴇ:'Tʻ',Ⴈ:'I',Ⴉ:'K',Ⴊ:'L',Ⴋ:'M',Ⴌ:'N',Ⴍ:'O',Ⴎ:'P',Ⴏ:'Ž',Ⴐ:'R',Ⴑ:'S',Ⴒ:'T',Ⴓ:'U',Ⴔ:'Pʻ',Ⴕ:'Kʻ',Ⴖ:'Ġ',Ⴗ:'Q',Ⴘ:'Š',Ⴙ:'Čʻ',Ⴚ:'Cʻ',Ⴛ:'Ż',Ⴜ:'C',Ⴝ:'Č',Ⴞ:'X',Ⴟ:'J',Ⴠ:'H',Ⴡ:'Ē',Ⴢ:'Y',Ⴤ:'X',Ⴥ:'Ō',Ⴣ:'W',ⴀ:'a',ⴁ:'b',ⴂ:'g',ⴃ:'d',ⴄ:'e',ⴅ:'v',ⴆ:'z',ⴇ:'tʻ',ⴈ:'i',ⴉ:'k',ⴊ:'l',ⴋ:'m',ⴌ:'n',ⴍ:'o',ⴎ:'p',ⴏ:'ž',ⴐ:'r',ⴑ:'s',ⴒ:'t',ⴓ:'u',ⴔ:'pʻ',ⴕ:'kʻ',ⴖ:'ġ',ⴗ:'q',ⴘ:'š',ⴙ:'čʻ',ⴚ:'cʻ',ⴛ:'ż',ⴜ:'c',ⴝ:'č',ⴞ:'x',ⴟ:'j',ⴠ:'h',ⴡ:'ē',ⴢ:'y',ⴤ:'x',ⴥ:'ō',ⴣ:'w'};
      break;   
    case 'iso-9':
      // https://en.wikipedia.org/wiki/ISO_9
      transliterate = {А:'A',Ӓ:'Ä',Ӓ̄:'Ạ̈',Ӑ:'Ă',А̄:'Ā',Ӕ:'Æ',А́:'Á',А̊:'Å',Б:'B',В:'V',Г:'G',Ѓ:'Ǵ',Ғ:'Ġ',Ҕ:'Ğ',Һ:'Ḥ',Д:'D',Ђ:'Đ',Е:'E',Ӗ:'Ĕ',Ё:'Ë',Є:'Ê',Ж:'Ž',Җ:'Ž̦',Ӝ:'Z̄',Ӂ:'Z̆',З:'Z',Ӟ:'Z̈',Ӡ:'Ź',Ѕ:'Ẑ',И:'I',Ӣ:'Ī',И́:'Í',Ӥ:'Î',Й:'J',І:'Ì',Ї:'Ï',І̄:'Ǐ',Ј:'J̌',Ј̵:'J́',К:'K',Ќ:'Ḱ',Ӄ:'Ḳ',Ҝ:'K̂',Ҡ:'Ǩ',Ҟ:'K̄',Қ:'K̦',К̨:'K̀',Ԛ:'Q',Л:'L',Љ:'L̂',Ԡ:'L̦',М:'M',Н:'N',Њ:'N̂',Ң:'N̦',Ӊ:'Ṇ',Ҥ:'Ṅ',Ԋ:'Ǹ',Ԣ:'Ń',Ӈ:'Ň',Н̄:'N̄',О:'O',Ӧ:'Ö',Ө:'Ô',Ӫ:'Ő',Ӧ̄:'Ọ̈',Ҩ:'Ò',О́:'Ó',О̄:'Ō',Œ:'Œ',П:'P',Ҧ:'Ṕ',Ԥ:'P̀',Р:'R',С:'S',Ҫ:'Ș',С̀:'S̀',Т:'T',Ћ:'Ć',Ԏ:'T̀',Т̌:'Ť',Ҭ:'Ț',У:'U',Ӱ:'Ü',Ӯ:'Ū',Ў:'Ŭ',Ӳ:'Ű',У́:'Ú',Ӱ̄:'Ụ̈',Ү:'Ù',Ұ:'U̇',Ԝ:'W',Ф:'F',Х:'H',Ҳ:'H̦',Ц:'C',Ҵ:'C̄',Џ:'D̂',Ч:'Č',Ҷ:'C̦',Ӌ:'C̣',Ӵ:'C̈',Ҹ:'Ĉ',Ч̀:'C̀',Ҽ:'C̆',Ҿ:'C̨̆',Ш:'Š',Щ:'Ŝ',Ъ:'ʺ',Ы:'Y',Ӹ:'Ÿ',Ы̄:'Ȳ',Ь:'ʹ',Э:'È',Ә:'A̋',Ӛ:'À',Ю:'Û',Ю̄:'Û̄',Я:'Â',Ґ:'G̀',Ѣ:'Ě',Ѫ:'Ǎ',Ѳ:'F̀',Ѵ:'Ỳ',Ӏ:'‡',ʼ:'`',ˮ:'¨',Я:'Â',Ґ:'G̀',Ѣ:'Ě',Ѫ:'Ǎ',Ѳ:'F̀',Ѵ:'Ỳ',Ӏ:'‡',ʼ:'`',ˮ:'¨',а:'a',ӓ:'ä',ӓ̄:'ạ̈',ӑ:'ă',а̄:'ā',ӕ:'æ',а́:'á',а̊:'å',б:'b',в:'v',г:'g',ѓ:'ǵ',ғ:'ġ',ҕ:'ğ',һ:'ḥ',д:'d',ђ:'đ',е:'e',ӗ:'ĕ',ё:'ë',є:'ê',ж:'ž',җ:'ž̦',ӝ:'z̄',ӂ:'z̆',з:'z',ӟ:'z̈',ӡ:'ź',ѕ:'ẑ',и:'i',ӣ:'ī',и́:'í',ӥ:'î',й:'j',і:'ì',ї:'ï',і̄:'ǐ',ј:'ǰ',ј̵:'j́',к:'k',ќ:'ḱ',ӄ:'ḳ',ҝ:'k̂',ҡ:'ǩ',ҟ:'k̄',қ:'k̦',к̨:'k̀',ԛ:'q',л:'l',љ:'l̂',ԡ:'l̦',м:'m',н:'n',њ:'n̂',ң:'n̦',ӊ:'ṇ',ҥ:'ṅ',ԋ:'ǹ',ԣ:'ń',ӈ:'ň',н̄:'n̄',о:'o',ӧ:'ö',ө:'ô',ӫ:'ő',о̄̈:'ọ̈',ҩ:'ò',о́:'ó',о̄:'ō',œ:'œ',п:'p',ҧ:'ṕ',ԥ:'p̀',р:'r',с:'s',ҫ:'ș',с̀:'s̀',т:'t',ћ:'ć',ԏ:'t̀',т̌:'ť',ҭ:'ț',у:'u',ӱ:'ü',ӯ:'ū',ў:'ŭ',ӳ:'ű',у́:'ú',ӱ̄:'ụ̈',ү:'ù',ұ:'u̇',ԝ:'w',ф:'f',х:'h',ҳ:'h̦',ц:'c',ҵ:'c̄',џ:'d̂',ч:'č',ҷ:'c̦',ӌ:'c̣',ӵ:'c̈',ҹ:'ĉ',ч̀:'c̀',ҽ:'c̆',ҿ:'c̨̆',ш:'š',щ:'ŝ',ъ:'ʺ',ы:'y',ӹ:'ÿ',ы̄:'ȳ',ь:'ʹ',э:'è',ә:'a̋',ӛ:'à',ю:'û',ю̄:'û̄',я:'â',ґ:'g̀',ѣ:'ě',ѫ:'ǎ',ѳ:'f̀',ѵ:'ỳ',я:'â',ґ:'g̀',ѣ:'ě',ѫ:'ǎ',ѳ:'f̀',ѵ:'ỳ'};
      break; 
  }

  return wordrange.map(function(row) {
    return row.map(function(word) {
      return word
        .split('')
        .map(function(char) {
          return transliterate[char] || char;
        })
        .join('');
    });
  });
}
