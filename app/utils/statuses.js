export default function statuses(){
  return {
    converte(status){
      switch (status) {
        case `init`: return `Looking for love!`.htmlSafe();
        case `spec-design`: return `Creating challenges`.htmlSafe();
        case `building`: return `Tackling challenges`.htmlSafe();
        case `testing`: return `Under review`.htmlSafe();
        case `finished`: return `Ready to use!`.htmlSafe();
        default: return `What?!`.htmlSafe() ;
      }
    }
  };
};
