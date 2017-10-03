import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageName'
})

export class LanguageNamePipe implements PipeTransform {
  private languages =
  {'af': 'Afrikaans',
  'ar': 'العربية',
  'bc': 'Botswana',
  'cb': 'English (Caribbean)',
  'de': 'Deutsch',
//   'dt': '',
  'el': 'ελληνικά',
  'en': 'English',
  'es': 'Español',
  'fj': 'Vosa Vakaviti',
  'fr': 'Français',
  'gr': 'Greek',
  'ha': '(Hausa) هَوُسَ',
  'he': 'עברית',
  'hi': 'हिन्दी',
//   'hl': '',
  'ht': 'Kreyòl ayisyen',
//   'ib': '',
  'id': 'Indonesia',
  'ig': 'Asụsụ Igbo',
  'il': 'Hebrew (Israel)',
  'it': 'Italiano',
//   'jr': '',
  'kj': 'Kuanyama',
  'kp': 'Korea (DPR)',
  'kr': 'Kanuri',
  'mi': 'te reo Māori',
  'mr': 'मराठी',
  'ms': 'بهاس ملايو',
  'my': 'ဗမာစာ',
  'nb': 'Norsk Bokmål',
  'ne': 'नेपाली',
  'ng': 'Owambo',
  'nl': 'Nederlands',
  'no': 'Norsk',
  'ns': 'Northern Sotho',
  'or': 'ଓଡ଼ିଆ',
  'pa': 'ਪੰਜਾਬੀ',
  'pg': 'Papua New Guinea',
  'pm': 'Saint Pierre And Miquelon',
  'pt': 'Português',
  'ro': 'Română',
  'ru': 'Русский',
  'rw': 'Ikinyarwanda',
  'sk': 'Slovenčina',
  'so': 'Soomaaliga',
  'sp': 'Serbian',
  'ss': 'SiSwati',
  'sw': 'Kiswahili',
  'ta': 'தமிழ்',
  'th': 'ไทย',
  'tl': 'Wikang Tagalog',
  'tn': 'Setswana',
  'to': 'Faka Tonga',
  'ts': 'Xitsonga',
  'tw': 'Twi',
  'ur': 'اردو',
  've': 'Tshivenḓa',
  'vi': 'Tiếng Việt',
  'xh': 'isiXhosa',
  'yo': 'Yorùbá',
  'zh-cn': 'Chinese (PRC)',
  'zh-tw': 'Chinese (Taiwan)',
  'zu': 'isiZulu'};

  transform(languageCode: string): string {
    if (!this.languages.hasOwnProperty(languageCode)) {
        return languageCode;
    }

    return this.languages[languageCode];
  }

}
