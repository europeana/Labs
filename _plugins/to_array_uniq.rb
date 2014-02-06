module Jekyll
  module Filters
    def make_flat(datasets)
      polje = []
      for ds in datasets       
        if (defined? ds["tags"])
          polje = polje | ds["tags"]
        end
      end
      polje.uniq
    end
        
  end
end