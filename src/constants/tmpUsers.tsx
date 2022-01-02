import { IUser, IChat } from "../types/types";

export const users: IUser[] = [
    {
        id: 'u1',
        name: 'Ryan Florence',
        url: 'https://bit.ly/ryan-florence',
    },
    {
        id: 'u2',
        name: 'Segun Adebayo',
        url: 'https://bit.ly/sage-adebayo',
    },
    {
        id: 'u3',
        name: 'Kent Dodds',
        url: 'https://bit.ly/kent-c-dodds',
    },
    {
        id: 'u4',
        name: 'Prosper Otemuyiwa',
        url: 'https://bit.ly/prosper-baba',
    },
    {
        id: 'u5',
        name: 'Christian Nwamba',
        url: 'https://bit.ly/code-beast',
    },
];

export const chats: IChat[] = [
    {
        id: 'C001',
        users: [
            users[0], users[1]
        ],
        messages: [
        ]
    },
    {
        id: 'C002',
        users: [
            users[2], users[1]
        ],
        messages: [],
    },
    {
        id: 'C003',
        users: [
            users[3], users[1]
        ],
        messages: [],
    },
    {
        id: 'C004',
        users: [
            users[3], users[1], users[2]
        ],
        messages: [],
    }
];

export const quotes = [
    "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on"
    ,

    "First, have a definite, clear practical ideal; a goal, an objective , have the necessary means to achieve your ends; wisdom, money, materials, and methods , adjust all your means to that end"
    ,

    "If the wind will not serve, take to the oars"
    ,

    "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground"
    ,

    "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained"
    ,

    "Too many of us are not living our dreams because we are living our fears"
    ,

    "Challenges are what make life interesting and overcoming them is what makes life meaningful "
    ,

    "If you want to lift yourself up, lift up someone else "
    ,

    "I have been impressed with the urgency of doing ; we must apply ; we must do"
    ,

    "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless"
    ,

    "You take your life in your own hands, and what happens? A terrible thing, no one to blame"
    ,

    "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do"
    ,

    "I didn’t fail the test 100 ways to do it wrong"
    ,

    "In order to succeed, your desire for success should be greater than your fear of failure"
    ,

    "A person who never made a mistake never tried anything new.  Albert Einstein"
    ,

    "The person who says it cannot be done should not interrupt the person who is doing it"
    ,

    "There are no traffic jams along the extra mile"
    ,

    "It is never too late to be what you might have been"
    ,

    "You become what you believe"
    ,

    "I would rather die of passion than of boredom"
    ,

    "A truly rich man is one whose children run into his arms when his hands are empty"
    ,

    "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings"
    ,

    "If you want your children to turn out well, spend twice as much time with them, and half as much money"
    ,

    "Build your own dreams, or someone else will hire you to build theirs"
    ,

    "The battles that count aren’t the ones for gold medals –the invisible battles inside all of us–that’s where it’s at"
    ,

    "Education costs money.  But then so does ignorance"
    ,

    "I have learned over the years that when one’s mind is made up, this diminishes fear"
    ,

    "It does not matter how slowly you go as long as you do not stop"
    ,

    "If you look at what you have in life, you’ll always have more ’t have in life, you’ll never have enough"
    ,

    "Remember that not getting what you want is sometimes a wonderful stroke of luck"
    ,

    "You can’t use up creativity.  The more you use, the more you have"
    ,

    "Dream big and dare to fail"
    ,

    "Our lives begin to end the day we become silent about things that matter ."
    ,

    "Do what you can, where you are, with what you have"
    ,

    "If you do what you’ve always done, you’ll get what you’ve always gotten"
    ,

    "Dreaming, after all, is a form of planning"
    ,

    "It’s your place in the world; it’s your life , and make it the life you want to live"
    ,

    "You may be disappointed if you fail, but you are doomed if you don’t try"
    ,

    "Remember no one can make you feel inferior without your consent"
    ,

    "Life is what we make it, always has been, always will be"
    ,

    "The question isn’t who is going to let me; it’s who is going to stop me"
    ,

    "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it"
    ,

    "It’s not the years in your life that count ’s the life in your years"
    ,

    "Change your thoughts and you change your world"
    ,

    "Either write something worth reading or do something worth writing"
    ,

    "Nothing is impossible, the word itself says, “I’m possible!” –Audrey Hepburn"
    ,

    "The only way to do great work is to love what you do"
    ,

    "If you can dream it, you can achieve it"
];

export const auth = users[1];
