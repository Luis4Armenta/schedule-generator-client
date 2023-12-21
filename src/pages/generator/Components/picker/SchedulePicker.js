
import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './picker.css'
import MyContext from '../../../../MyContext';

const SchedulePicker = ({ onSelect }) => {
  const { data } = useContext(MyContext);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const handleScheduleSelect = (schedule) => {
    setSelectedSchedule(schedule);
    onSelect(schedule);
  };

  return (
    <div className='card shadow-sm'>
      <div className='card-body'>
        <p className='card-title text-left fw-medium fs-5'>Tus mejores opciones</p>
        <hr className='w-50 text-white-50 bg-dark shadow-sm' />
        {data.length === 0 ? (
          <div className='text-center text-body-secondary'>
            <p><i className="bi bi-archive h1"></i></p>
            <h2>Nada que mostrar por ahora</h2>
          </div>
        ) : (
          <div className="card-group overflow-auto">
            <div className="opciones-scroll">
              {data.map((item, index) => (
                <div
                  className={`card opcion shadow-sm ${selectedSchedule === item ? 'selected' : ''}`}
                  key={index}
                  onClick={() => handleScheduleSelect(item)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SchedulePicker