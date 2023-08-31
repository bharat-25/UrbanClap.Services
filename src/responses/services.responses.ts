export const RESPONSE_CODES = {
    CREATED: 201,
    SUCCESS: 200,
    BADREQUEST: 400,
    UNAUTHORIZED:401,
    NOTFOUND:404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
    
};

export const RESPONSE_MESSAGES = {
    INTERNAL_SERVER_ERROR: 'INTERNAL SERVER ERROR',
    SERVICE_ALREADY_EXIST: 'SERVICE WITH THE SAME CATEGORY_ID ALREADY EXISTS',
    SERVICE_ADDED: 'SERVICE ADDED SUCCESSFULLY',
    SHOW_ALL_SERVICES: 'ALL SERVICES GETTED',
    BAD_REQUEST: 'BAD REQUEST',
    UNAUTHORIZED: 'UNAUTHORIZED',
    IS_ADMIN: 'ACCESS DENIED',
    ACCESS_DENIED: 'YOU ARE NOT ADMIN',
    NOT_FOUND:'TOKEN NOT FOUND',
    ALREADY_EXIST:'ALREADY EXIST',
    EVENT_CREATED:'EVENT SUCCESSFULLY CREATED',
    EVENT_DELETE:'EVENT DELETE SUCCESSFULLY'
};
