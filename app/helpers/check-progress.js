import Ember from 'ember';

export function checkProgress(params) {
  switch (params[0]) {
    case "init": return Ember.String.htmlSafe("<div class=\"pink progress\">Looking for love</div>");
    case "spec-design": return Ember.String.htmlSafe("<div class=\"black progress\">Creating challanges</div>");
    case "building": return Ember.String.htmlSafe("<div class=\"blue progress\">Tackling challenges</div>");
    case "testing": return Ember.String.htmlSafe("<div class=\"red progress\">Under review</div>");
    case "finished": return Ember.String.htmlSafe("<div class=\"green progress\">Ready to use!</div>") ;
    default: return Ember.String.htmlSafe("<div class=\"progress\">What?!</div>") ;

  }
}

export default Ember.Helper.helper(checkProgress);
