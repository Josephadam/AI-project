import {useState, useCallback} from 'react';
import {LiveKitRoom, RoomAudioRenderer} from '@livekit/components-react';
import "@livekit/components-styles"


const LivekitModal = ({setShowSupport}) => {
    const [isSubmittingName, setIsSubmittingName] = useState(true);
    const [name, setName] = useState('');

    const handleSubmitName = () => {}

    return <div className="modal-overlay">
        <div className="modal-content">
            <div className="support-room">
                {isSubmittingName ? (
                    <form onSubmit={handleSubmitName} className="name-form">
                        <h2>Enter your name to connect to support</h2>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your name' required />
                        <button type='submit'>Connect</button>
                        <button type='button' className='cancel-button' onClick={() => setShowSupport(false)}>Cancel</button>
                    </form>
                ) : (
                    <LiveKitRoom
                    serverUrl={import.meta.env.VITE_LIVEKIT_URL}
                    token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDA0NDM0OTUsImlzcyI6IkFQSWV6VjhlZkhNV1NDRCIsIm5iZiI6MTc0MDQ0MjU5NSwic3ViIjoiSk9TRVBIIiwidmlkZW8iOnsiY2FuUHVibGlzaCI6dHJ1ZSwiY2FuUHVibGlzaERhdGEiOnRydWUsImNhblN1YnNjcmliZSI6dHJ1ZSwicm9vbSI6IlJPT00xIiwicm9vbUpvaW4iOnRydWV9fQ.opyLh6NgLAMg32iGug9SgGZNBVdKsrCulyjW1sgOLUs'
                    connect={true}
                    video={false}
                    audio={true}
                    onDisconnected={() => {
                        setShowSupport(false)
                        setIsSubmittingName(true)
                    }}
                    >
                        <RoomAudioRenderer>

                        </RoomAudioRenderer>

                    </LiveKitRoom>
                )}
            </div>
        </div>
    </div>
}

export default LivekitModal