import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

register("ko", koLocale); // 언어 -> Korean 등록

export function formatAgo(date, lang='en_US') {
    return format(date, lang);
}