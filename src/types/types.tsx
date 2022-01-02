export interface IMessage {
    content: string;
    from: IUser;
    timestamp: string;
}

export interface IChat {
    id: string;
    users: IUser[];
    messages: IMessage[];
}

export interface IUser {
    id: string;
    name: string;
    url?: string;
}

export interface IBaseMessageStyle {
    borderRadius: string;
    paddingX: string;
    paddingY: string;
    marginBottom: string;
}

export interface IToFromStyle extends IBaseMessageStyle {
    bg: string;
}

export interface IToFromProps {
    message: IMessage;
    bg: string;
}

export interface ILocation {
    latitude: string;
    longitude: string;
    city: string;
}

export interface IWeather {
    description: string;
    temp: number;
    icon: string;
}