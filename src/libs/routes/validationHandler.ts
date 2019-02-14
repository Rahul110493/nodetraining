export default (objData) => (req, res, next) => {
    const keys = Object.keys(objData);
    keys.forEach((key) => {
       
      const items = objData[key];
      console.log(`item--------${JSON.stringify(items)}`)
     
      const value = items.in.map((item) => {
         
        return req[item][key];
      });
      console.log(`value--------${value}`)
      if (items && items.required) {
       
        const validateValue = value.filter((item) => item);
        
        if (validateValue.length !== value.length) {
          next(notFound(`${key} is required`));
        }
      }

      if (items && items.string) {
        console.log(`Inside name Required--------${items.string}`)
        const validateValue = value.filter((item) => item);
        const iterate = validateValue.values();
   
        if (typeof iterate.next().value !== 'string' ) {
          
          next(notFound(`${key} is not String`));
        }
      }
     
      if (items && items.number) {
        let validateValue1 = value.filter((item) => item);
        if (isNaN(validateValue1)) {
          next(notFound('not number type'));
        }
        if (validateValue1 === '') {
          validateValue1 = items.default;
        }
      }
      if (items && items.regex) {
        const validateValue = value.filter((item) => item);
        if (!items.regex.test(validateValue)) {
          next(notFound('incorrect format regex'));
        }
      }
      if (items.isObject) {
        const validateValue = value.filter((item) => item);
        if (typeof validateValue !== 'object') {
          next(notFound('type is not Object'));
        }
      }
     

    });
    console.log('Before next')
    next();
  };

  function notFound(msg)
  {
    return { error: 'Bad Request', message: msg, status: 400}
  }
 
  