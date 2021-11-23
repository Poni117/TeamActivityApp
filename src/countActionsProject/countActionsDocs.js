import CountActionsDocsWithFilter from "./countActionsDocs/countActionsDocsWithFilter";
import CountActionsDocsWithoutFilter from "./countActionsDocs/countActionsDocsWithoutFilter";

export default function CountActionsDocs(spaces, dates, filterLocation){

    if (filterLocation.spaces === 'All') {
        
        return CountActionsDocsWithoutFilter(spaces, dates);
    }

    return CountActionsDocsWithFilter(spaces, dates, filterLocation)

}