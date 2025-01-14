import classes from './SeminarTickets.module.css';
import { useSelector } from 'react-redux';

const SeminarTickets = props => {
    const {
        eventName,
        eventAddress,
        seminarDateTime,
        registrantInfo: {
            enteredName,
            enteredEmail,
            enteredPhoneNumber,
            enteredFullAddress,
            enteredCityName,
            enteredStateName,
            enteredZipCode }
    } = props;

    return (
        <>
            <div className={classes['seminar-tickets-overlay']}>
                <h2>Complete registration and we'll mail your RSVP tickets!</h2>
                <ul>
                    <li>Mail to:</li>
                    <li>{enteredName}</li>
                    <li>{enteredFullAddress}</li>
                    <li>{enteredCityName} {enteredStateName} {enteredZipCode}</li>
                </ul>
            </div>
            <div className={classes['seminar-tickets']}>
                <div className={classes['seminar-tickets__ticket']}>
                    <div className={classes['ticket__admissions']}>
                        <div className={classes['admissions__admit-amount']}>
                            Admit one
                        </div>
                    </div>
                    <div className={classes['ticket__info']}>
                        <div className={classes['ticket__registrant-info']}>
                            <div className={classes['registrant-info__event-title']}>{eventName}</div>
                            <div className={classes['registrant-info__guest-name']}>
                                {enteredName ? enteredName : 'Registrant Name Here'}
                            </div>
                            <div className={classes['registrant-info__live-event']}>Live Event</div>
                        </div>
                        <div className={classes['ticket__event-details']}>
                            <div className={classes['event-details__date-time']}>
                                {seminarDateTime}
                            </div>
                            <div className={classes['event-details__event-location']}>
                                <div>{eventAddress}</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes['ticket__barcode']}>
                        <div className={classes['barcode__info']}>
                            <i className="fas fa-barcode fa-7x"></i>
                            <span>12 0120 9292</span>
                        </div>
                    </div>
                </div>
                <div className={classes['seminar-tickets__ticket']}>
                    <div className={classes['ticket__admissions']}>
                        <div className={classes['admissions__admit-amount']}>
                            Admit one
                        </div>
                    </div>
                    <div className={classes['ticket__info']}>
                        <div className={classes['ticket__registrant-info']}>
                            <div className={classes['registrant-info__event-title']}>{eventName}</div>
                            <div className={classes['registrant-info__guest-name']}>
                                {enteredName ? enteredName : 'Registrant Name Here'}
                            </div>
                            <div className={classes['registrant-info__live-event']}>Live Event</div>
                        </div>
                        <div className={classes['ticket__event-details']}>
                            <div className={classes['event-details__date-time']}>
                                {seminarDateTime}
                            </div>
                            <div className={classes['event-details__event-location']}>
                                <div>{eventAddress}</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes['ticket__barcode']}>
                        <div className={classes['barcode__info']}>
                            <i className="fas fa-barcode fa-7x"></i>
                            <span>12 0120 9292</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SeminarTickets;
