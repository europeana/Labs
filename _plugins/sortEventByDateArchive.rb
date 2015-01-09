module Jekyll
  module Filters
    def sortEventByDateArchive(events)
      sortirani = events.sort_by {|x| Date.strptime(x.data['startdate'].first,"%d/%m/%Y")}
      sortirani.select{|x| Date.strptime(x.data['enddate'].nil? ? x.data['startdate'].first : x.data['enddate'].first,"%d/%m/%Y") <= DateTime.now.to_date}
    end        
  end
end
