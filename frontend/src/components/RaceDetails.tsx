export interface EventDetails {
  RoundNumber: number;
  Country: string;
  Location: string;
  OfficialEventName: string;
  EventDate: string;
  EventName: string;
  EventFormat: string;
  Session1: string;
  Session1Date: string;
  Session1DateUtc: string;
  Session2: string;
  Session2Date: string;
  Session2DateUtc: string;
  Session3: string;
  Session3Date: string;
  Session3DateUtc: string;
  Session4: string;
  Session4Date: string;
  Session4DateUtc: string;
  Session5: string;
  Session5Date: string;
  Session5DateUtc: string;
  F1ApiSupport: boolean;
}

interface RaceDetailsProps {
  event: EventDetails;
}

export const RaceDetails = ({ event }: RaceDetailsProps) => {
  const sessions = [
    { name: event.Session1, date: event.Session1Date },
    { name: event.Session2, date: event.Session2Date },
    { name: event.Session3, date: event.Session3Date },
    { name: event.Session4, date: event.Session4Date },
    { name: event.Session5, date: event.Session5Date },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="race-details-card">
      <header>
        <h2>{event.OfficialEventName}</h2>
        <p className="location">
          <strong>{event.Location}, {event.Country}</strong>
        </p>
      </header>
      
      <div className="sessions-list">
        <h3>Schedule</h3>
        {sessions.map((session, index) => (
          <div key={index} className="session-item">
            <span className="session-name">{session.name}:</span>
            <span className="session-time">{formatDate(session.date)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
