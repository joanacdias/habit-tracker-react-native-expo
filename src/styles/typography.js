import { scaleFont } from './mixins';
import { GRAY_600 } from './colours';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';

// FONT FAMILY
export const FONT_FAMILY_TITLES = 'Poppins_600SemiBold';
export const FONT_FAMILY_BODY = 'Poppins_400Regular';
export const FONT_FAMILY_BUTTONS = 'Poppins_500Medium';

// FONT SIZE
export const FONT_SIZE_32 = scaleFont(32);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_28 = scaleFont(28);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_H1 = {
  fontFamily: FONT_FAMILY_TITLES,
  fontSize: FONT_SIZE_32,
};

export const FONT_BODY_XL = {
  fontFamily: FONT_FAMILY_BODY,
  fontSize: FONT_SIZE_18,
  lineHeight: LINE_HEIGHT_28,
  color: GRAY_600,
};

export const FONT_BUTTON_L = {
  fontFamily: FONT_FAMILY_BUTTONS,
  fontSize: FONT_SIZE_16,
  lineHeight: LINE_HEIGHT_24,
}