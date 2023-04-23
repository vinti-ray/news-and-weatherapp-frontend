import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./new.css"
function CalendarYear() {

      return (
        <div   style={{ display: "flex", justifyContent: "center",height:"450px",}}>
        <Calendar
        className="calendar"
          value={new Date()}
        //   view={'year'}
       
      
        />
      </div>
      );
}
export default CalendarYear