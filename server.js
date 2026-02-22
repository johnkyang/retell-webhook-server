const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ status: 'ok', message: 'Retell webhook server is running' });
});

// Retell webhook endpoint
app.post('/webhook', (req, res) => {
    const payload = req.body;
    console.log('Received webhook:', JSON.stringify(payload, null, 2));

           // Handle different Retell event types
           const { event, call } = payload;

           switch (event) {
             case 'call_started':
                     console.log('Call started:', call?.call_id);
                     break;
             case 'call_ended':
                     console.log('Call ended:', call?.call_id);
                     break;
             case 'call_analyzed':
                     console.log('Call analyzed:', call?.call_id);
                     break;
             default:
                     console.log('Unknown event:', event);
           }

           res.json({ received: true });
});

app.listen(PORT, () => {
    console.log(`Retell webhook server listening on port ${PORT}`);
});
