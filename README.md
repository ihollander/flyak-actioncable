# Lecture Notes

## SWBATs
- Understand the difference between HTTP and WebSocket protocols
- Use Action Cable in Rails
- Use `react-actioncable-provider` in React

### Backend
* handshake route
`mount ActionCable.server => '/cable'`

* create channel
`rails g channel flight`

* Using `stream_from`
  * Useful for subscribing to all updates

```ruby
class FlightChannel < ApplicationCable::Channel
  def subscribed
    stream_from "flight_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
```

* In controller: broadcast
`ActionCable.server.broadcast('flight_channel', ticket.seat)`

* `stream_for`
  * Useful for subscribing to updates to a specific instance
  * `FlightChannel.broadcast_to(flight, { type: "SEAT_PURCHASED", payload: SeatSerializer.new(ticket.seat) })`
  
```ruby
class FlightChannel < ApplicationCable::Channel
  def subscribed
    flight = Flight.find_by(id: params[:flight_id])
    stream_for flight
  end
end
```

### Frontend
* `$ npm install ihollander/react-actioncable-provider`
  * `react-actioncable-provider` has a bug, use the fork from Ian's github until they fix

* wrap the app in the provider
```jsx
import { ActionCableProvider } from 'react-actioncable-provider';

<ActionCableProvider url='ws://localhost:3000/cable'>
  <App />
</ActionCableProvider>
```

* in the component
```jsx
import { ActionCableConsumer } from 'react-actioncable-provider';

	<ActionCableConsumer
    channel={{ 
      channel: 'FeedChannel',
      feed_id: feed.id // use to identify channel with stream_for
    }}
    onReceived={action => {
      console.log('tweet', action.payload);
      this.addTweet(action.payload);
    }}
  />
```

# Resources

* [react-actioncable-provider how to blog, start here](https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296)
* [creating-a-drawing-with-friends-web-app-w-action-cable-and-rails-5](https://medium.com/@hdwatts/creating-a-drawing-with-friends-web-app-w-action-cable-and-rails-5-1052ac43d74b)
* [Heroku and ActionCable](https://blog.heroku.com/real_time_rails_implementing_websockets_in_rails_5_with_action_cable#what-are-websockets)
* [Alex G blog- sockets with phoenix and react hooks](https://medium.com/flatiron-labs/improving-ux-with-phoenix-channels-react-hooks-8e661d3a771e)


* [Gist where Alex breaks down how something like the `react-actioncable-provider` library is made](https://gist.github.com/alexgriff/7872ce828c867a1cc5f4e946e61f1998)

## Useful Tools for testing on multiple computers/mobile
* [ngrok](https://ngrok.com/)
* [localtunnel](https://github.com/localtunnel/localtunnel)

## Hidden Names
Alex Griffith™️

App: [http://hidden-names.herokuapp.com/](http://hidden-names.herokuapp.com/)
* [Frontend Code](https://github.com/alexgriff/hidden_phrase_frontend)
* [Backend Code](https://github.com/alexgriff/hidden_phrase_backend)

## Gridbuds
Ian Hollander™️

App: [https://gridbuds.netlify.com](https://gridbuds.netlify.com)
* [Frontend Code](https://github.com/ihollander/react-ipuz)
* [Backend Code](https://github.com/ihollander/react-ipuz-api)