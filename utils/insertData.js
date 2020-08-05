const fs = require('fs');
const crypto = require('crypto');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const hashPassword = require('./hashPassword');

async function addEventToDatabase({eventName, rounds, phone, participants}, db, userDb) {
    // Insert event
    const insertedEvent = await db.collection('events').insertOne({
        eventName,
        rounds,
        currentRound: 0
    });
    const insertedId = insertedEvent.insertedId;

    // Insert participants
    const insertedParticipants = await db.collection('participations')
        .insertMany(participants.map(p => ({...p, eventId: ObjectId(insertedId)})));

    // Generate password
    const salt = crypto.randomBytes(512).toString('hex');
    const iterations = Math.floor(Math.random(500) + 500);
    const password = crypto.createHmac('sha512', process.env.PASS_KEY)
        .update(phone).digest('hex').toString().slice(0, 6);
    const hashedPassword = hashPassword(password, salt, iterations);

    // Insert user
    const insertedUser = await userDb.collection('eventManagers').insertOne({
        _id: phone,
        password: {
            salt, iterations, hash: hashedPassword
        },
        eventId: ObjectId(insertedId)
    });
    console.log(insertedId, eventName, phone, password);
}

