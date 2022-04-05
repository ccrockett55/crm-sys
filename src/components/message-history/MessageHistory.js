import React from 'react';
import PropTypes from 'prop-types';
import '../../components/message-history/message.css'

export const MessageHistory = ({msg}) => {
  if (!msg) return null;

    return msg.map((row, i) => (
    <div key={i} className='message-history'>
        <div className='send mt-3'>
            <div className='sender font-weight-bold text-secondary'>{row.messageBy}</div>
            <div className='date'>{row.date}</div>
        </div>
        <div className='message'>{row.message}</div>
    </div>
  ));
}

MessageHistory.propTypes = {
    msg: PropTypes.array.isRequired,
}