{
  "name": "Testimonial",
  "type": "object",
  "properties": {
    "client_name": {
      "type": "string",
      "description": "Name of the person giving testimonial"
    },
    "client_title": {
      "type": "string",
      "description": "Client's title or role"
    },
    "event_type": {
      "type": "string",
      "description": "Type of event they hired for"
    },
    "rating": {
      "type": "number",
      "minimum": 1,
      "maximum": 5,
      "description": "Star rating out of 5"
    },
    "testimonial_text": {
      "type": "string",
      "description": "The testimonial content"
    },
    "event_date": {
      "type": "string",
      "format": "date",
      "description": "Date of the event"
    },
    "featured": {
      "type": "boolean",
      "default": false,
      "description": "Whether to feature this testimonial prominently"
    }
  },
  "required": [
    "client_name",
    "testimonial_text",
    "rating"
  ]
}