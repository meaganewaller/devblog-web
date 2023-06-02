export function parseDateTime(time: Date, useTime: boolean) {
  const date = new Date(time);
  const Y = date.getFullYear();
  const M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1);
  const D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  if (!useTime) {
    return Y + '年' + M + '月' + D + '日';
  }
  return Y + '年' + M + '月' + D + '日 ' + h + ':' + m + ':' + s;
}

export function getNow(useTime: boolean) {
  const date = new Date();
  const Y = date.getFullYear();
  const M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1);
  const D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  if (!useTime) {
    return Y + '年' + M + '月' + D + '日';
  }
  return Y + '年' + M + '月' + D + '日 ' + h + ':' + m + ':' + s;
}

export function getDateSpan(time: Date) {
  const now = new Date()
  if (time > now) {
    return parseDateTime(time, true)
  }
  let millisecs = now.getTime() - time.getTime()
  let yearGap = millisecs / 31536000000
  if (yearGap >= 1) {
    return `${~~yearGap} 年前`
  }
  let monthGap = (now.getFullYear() - time.getFullYear()) * 12 + now.getMonth() - time.getMonth()
  if (monthGap > 0) {
    return `${monthGap} 月前`
  }
  let dayGap = millisecs / 86400000
  if (dayGap >= 1) {
    return `${~~dayGap} 天前`
  }
  let h = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  let m = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  return h + ":" + m;
}


const padTime = (t: number): string => {
  if (t < 10) return `0${t}`
  return t.toString()
}

const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

export function calcTime (time: Date): string {
  let curr = new Date()
  time = new Date(time)
  let timeStr = `${padTime(time.getHours())}:${padTime(time.getMinutes())}`
  let diffDays = (new Date(curr.toLocaleDateString()).getTime() - new Date(time.toLocaleDateString()).getTime()) / 86400000
  if (time.getFullYear() == curr.getFullYear() && time.getMonth() == curr.getMonth() && time.getDate() == curr.getDate()) {
    return `${getHourTime(time.getHours())}${timeStr}`
  }
  if (diffDays == 1) {
    return `昨天 ${getHourTime(time.getHours())}${timeStr}`
  }
  if (diffDays <= 7) {
      return `${weeks[time.getDay()]} ${getHourTime(time.getHours())}${timeStr}`
  }
  return `${time.getFullYear()}年${time.getMonth() + 1}月${time.getDate()}日 ${timeStr}`
}

const getHourTime = (hours: number): string => {
  if (hours <= 5) {
      return `凌晨`
  } else if (hours <= 12) {
      return `上午`
  } else if (hours <= 13) {
      return `中午`
  } else if (hours <= 18) {
      return `下午`
  } else if (hours <= 22) {
      return `晚上`
  } else {
      return `深夜`
  }
}
