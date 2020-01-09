export class Event {
    name: string;
    date: string;
    location: {
        type: {
          type: String, // Don't do { location: { type: String } }
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    };
    image: string;
    time: string;
    description: string;
    public: boolean;
}


