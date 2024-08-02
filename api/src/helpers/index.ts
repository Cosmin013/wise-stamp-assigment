import handlebars from 'handlebars';

export function generateSignature(source: string, data: {
    fullName: string,
    email: string,
    phone: string,
    logoUrl: string,
}) {
    const template = handlebars.compile(source);
    return template(data)
}