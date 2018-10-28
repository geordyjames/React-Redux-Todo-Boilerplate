import uuid from 'uuid';

export const add = name => {
	const option = {
		id: uuid(),
		name
  };
  
	return {
		type: 'ADD',
		option
	};
};

export const remove = id => ({
	type: 'REMOVE',
	id
});
