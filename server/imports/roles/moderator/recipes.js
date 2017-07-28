import role from './role'
import {Meteor} from 'meteor/meteor'
role.allow('acceptRecipes', function (root, {_id}) {
  Meteor.user.findOne(_id).roles.include('moderator')
})
