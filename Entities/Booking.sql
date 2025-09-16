{
  "name": "Booking",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Client's full name"
    },
    "email": {
      "type": "string",
      "format": "email",
      "description": "Client's email address"
    },
    "phone": {
      "type": "string",
      "description": "Client's phone number"
    },
    "event_type": {
      "type": "string",
      "enum": [
        "wedding",
        "corporate",
        "private_party",
        "concert",
        "recording",
        "other"
      ],
      "description": "Type of event"
    },
    "event_date": {
      "type": "string",
      "format": "date",
      "description": "Date of the event"
    },
    "event_time": {
      "type": "string",
      "description": "Time of the event"
    },
    "location": {
      "type": "string",
      "description": "Event location"
    },
    "duration": {
      "type": "string",
      "description": "Expected duration of performance"
    },
    "budget": {
      "type": "string",
      "description": "Client's budget range"
    },
    "special_requests": {
      "type": "string",
      "description": "Any special song requests or requirements"
    },
    "message": {
      "type": "string",
      "description": "Additional message or details"
    },
    "status": {
      "type": "string",
      "enum": [
        "pending",
        "confirmed",
        "completed",
        "cancelled"
      ],
      "default": "pending",
      "description": "Booking status"
    }
  },
  "required": [
    "name",
    "email",
    "event_type",
    "event_date"
  ]
}