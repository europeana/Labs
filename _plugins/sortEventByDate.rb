module Jekyll
  module Filters
    def sortEventByDate(events)
      events.sort_by {|x| Date.strptime(x.data['startdate'].first,"%d/%m/%Y")}
    end        
  end
end