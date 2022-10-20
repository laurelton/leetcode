#	Time: 	 O()
#	Space:	 O()

#############################################
#                                           #
#   Clever solution from discussion board   #
#                                           #
#############################################
# def stringify(a,b):
# 		if a == b:
# 			return str(a)
# 		else:
# 			return str(a) + "->" + str(b)

# 	nums = [lower-1] + nums + [upper+1] # that's the trick to avoid edge cases

# 	ans = [] 
# 	for i in range(1,len(nums)):
# 		if nums[i] - nums[i-1] > 1:
# 			ans.append(stringify(nums[i-1]+1,nums[i]-1))
# 	return ans