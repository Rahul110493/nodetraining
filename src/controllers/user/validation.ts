const validation = {
    delete: {
      id: {
        errorMessage: 'Id  is required',
        in: ['params'],
        required: true,
      },
    },
    post: {
      id: {
        errorMessage: 'Id  is required',
        in: ['body'],
        required: true,
        string: true,
        
      },
      name: {
        errorMessage: 'Name is required',
        in: ['body'],
        regex: /^[a-zA-Z\\s]*$/,
        required: true,
        
      },
    },
  
    get: {
      limit: {
        default: 10,
        errorMessage: 'Limit is invalid',
        in: ['query'],
        number: true,
        required: false,
      },
      skip: {
        default: 0,
        errorMessage: 'Skip is invalid',
        in: ['query'],
        number: true,
        required: false,
      },
  
    },
    put: {
      dataToUpdate: {
        in: ['body'],
        isObject: true,
        required: true,
        
        },
      id: {
        in: ['body'],
        required: true,
        string: true,
        },
      },
  };
  export default validation;
  