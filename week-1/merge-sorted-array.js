const merge = function (nums1, m, nums2, n) {
  // O(1)
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  // O(m + n)
  while (i >= 0 && j >= 0) {
    // O(1)
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  // O(n)
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};

// Worse time complexity: O(m + n)
