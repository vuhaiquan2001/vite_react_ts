import { Badge, Calendar } from 'antd';
import { PickerLocale } from 'antd/es/date-picker/generatePicker';
import type { CalendarProps } from 'antd/es/calendar';
import { useMemo, useState } from 'react';
import type { Dayjs } from 'dayjs';
import { SelectInfo } from 'antd/es/calendar/generateCalendar';
const DATE_FORMAT = 'DD/MM/YYYY';
const MONTH_FORMAT = 'MM/YYYY';
const DAY_FORMAT = 'DD/MM';
const CalendarPage = () => {
    // Locale for date picker
    const locale: PickerLocale = useMemo(
        () => ({
            lang: {
                locale: 'vi_VN',
                placeholder: 'Chọn ngày',
                rangePlaceholder: ['Ngày bắt đầu', 'Ngày kết thúc'],
                today: 'Hôm nay',
                now: 'Bây giờ',
                backToToday: 'Trở về hôm nay',
                ok: 'OK',
                clear: 'Clear',
                month: 'Tháng',
                year: 'Năm',
                timeSelect: 'Chọn thời gian',
                dateSelect: 'Chọn ngày',
                monthSelect: 'Chọn tháng',
                yearSelect: 'Chọn năm',
                decadeSelect: 'Chọn thập kỷ',
                yearFormat: 'YYYY',
                dateFormat: 'M/D/YYYY',
                dayFormat: 'D',
                dateTimeFormat: 'M/D/YYYY HH:mm:ss',
                monthFormat: 'MMMM',
                monthBeforeYear: true,
                previousMonth: 'Tháng trước (PageUp)',
                nextMonth: 'Tháng sau (PageDown)',
                previousYear: 'Năm trước (Control + left)',
                nextYear: 'Năm sau (Control + right)',
                previousDecade: 'Thập kỷ trước',
                nextDecade: 'Thập kỷ sau',
                previousCentury: 'Thế kỷ trước',
                nextCentury: 'Thế kỷ sau',
                shortWeekDays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
                shortMonths: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
            },
            timePickerLocale: {
                placeholder: 'Chọn thời gian',
            },
            dateFormat: 'YYYY-MM-DD',
            dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
            weekFormat: 'YYYY-wo',
            monthFormat: 'YYYY-MM',
        }),
        []
    );
    // List sự kiện
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [dateEvent, setDateEvent] = useState<string[]>(['26/12']);
    // Render sự kiện trong tháng
    const handleMonthEvent = (date: Dayjs) => {
        const listEvent = dateEvent.filter((v) => v.startsWith(date.format(MONTH_FORMAT)));
        return (
            <div>
                {listEvent.map((item, index) => (
                    <Badge key={index} status={'success'} text={item} />
                ))}
            </div>
        );
    };
    // Render sự kiện trong ngày
    const handleDateEvent = (current: Dayjs) => {
        const listEvent = dateEvent.filter((v) => v.includes(current.format(DAY_FORMAT)));
        return (
            <ul className="events" style={{ listStyle: 'none', padding: 0 }}>
                {listEvent.map((item, index) => (
                    <li key={index}>
                        <Badge status={'success'} text={item} />
                    </li>
                ))}
            </ul>
        );
    };
    // Render cell
    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
        if (info.type === 'date') return handleDateEvent(current); // Render sự kiện trong ngày
        if (info.type === 'month') return handleMonthEvent(current); // Render sự kiện trong tháng
        return info.originNode;
    };
    // Handle select date
    const handleSelect = (date: Dayjs, info: SelectInfo) => {
        console.log(date.format(DAY_FORMAT), info);
    };
    return <Calendar fullscreen={true} locale={locale} cellRender={cellRender} onSelect={handleSelect} />;
};

export default CalendarPage;
