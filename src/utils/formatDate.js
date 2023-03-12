import format from 'date-fns/format'

const formatDate = (date) => format(new Date(date), 'MMM do, yyyy')

export default formatDate
