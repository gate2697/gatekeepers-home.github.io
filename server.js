const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Simple code generator
const generateCode = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase(); // 8 character code
};

// Store generated codes
const codes = new Set();

app.post('/generate-code', (req, res) => {
    const newCode = generateCode();
    codes.add(newCode);
    res.json({ code: newCode });
});

app.post('/validate-code', (req, res) => {
    const { code } = req.body;
    if (codes.has(code)) {
        codes.delete(code); // Optionally remove the code after validation
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
